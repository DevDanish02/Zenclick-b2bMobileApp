import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
  BackHandler,
  Linking, // Import Linking to handle URLs
} from 'react-native';
import {Camera} from 'react-native-camera-kit';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Ionicons} from '../../constants/Icon';
import Colors from '../../constants/Colors';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation, useFocusEffect} from '@react-navigation/native'; // Import useFocusEffect

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Reset scanner when coming back to the screen
      setScanned(false);
    }, []),
  );

  useEffect(() => {
    requestCameraPermission();

    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        const result = await request(PERMISSIONS.IOS.CAMERA);
        setHasPermission(result === RESULTS.GRANTED);
      }
    } catch (err) {
      console.warn(err);
      setHasPermission(false);
    }
  };

  const onReadCode = event => {
    if (!scanned) {
      setScanned(true);
      const scannedValue = event.nativeEvent.codeStringValue;
      Alert.alert(
        'QR Scanned!',
        scannedValue,
        [
          {
            text: 'OK',
            onPress: () => {
              setScanned(false); // Reset the scanned state to allow new scans
            },
          },
          {
            text: 'Go to Link',
            onPress: () => {
              handleQRLink(scannedValue);
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const handleQRLink = scannedValue => {
    // Check if the scanned QR code is a valid URL
    const isURL = scannedValue.match(/^(http|https):\/\/[^ "]+$/);
    if (isURL) {
      Linking.openURL(scannedValue).catch(err =>
        console.error('Failed to open URL: ', err),
      );
    } else {
      Alert.alert(
        'Invalid QR Code',
        'This QR code does not contain a valid URL.',
      );
    }
    setScanned(false); // Reset scanning after opening the link
  };

  const toggleFlash = () => {
    setFlashOn(prev => !prev);
  };

  const handleUploadQR = () => {
    launchImageLibrary({mediaType: 'photo'}, async response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.warn(response.errorMessage);
        return;
      }
      const uri = response.assets[0].uri;
      setImageUri(uri);
      // Decode logic here...
    });
  };

  const handlePermissionDenied = () => {
    Alert.alert(
      'Camera Permission Denied',
      'Please enable camera permissions in settings.',
      [{text: 'OK', onPress: () => requestCameraPermission()}],
      {cancelable: false},
    );
  };

  if (!hasPermission) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera permission is required.
        </Text>
        <TouchableOpacity onPress={handlePermissionDenied}>
          <Text style={styles.permissionRetryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan any QR</Text>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Camera */}
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFillObject}
          cameraType="back"
          scanBarcode={true}
          onReadCode={onReadCode}
          showFrame={false}
          laserColor="transparent"
          frameColor="transparent"
          surfaceColor="transparent"
          torchMode={flashOn ? 'on' : 'off'} // <-- Use torchMode here
        />

        {/* Overlay */}
        <View style={styles.overlay}>
          <View style={styles.scannerBox}>
            {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map(
              corner => (
                <View key={corner} style={[styles.corner, styles[corner]]} />
              ),
            )}
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={handleUploadQR}>
            <Ionicons name="image-outline" size={30} color="#fff" />
            <Text style={styles.buttonText}>Upload QR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleFlash}>
            <Ionicons name="flashlight-outline" size={30} color="#fff" />
            <Text style={styles.buttonText}>
              {flashOn ? 'Flash Off' : 'Flash On'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Uploaded Image Preview */}
      {imageUri && (
        <View style={styles.uploadedQRContainer}>
          <Text style={styles.uploadedQRText}>Selected Image:</Text>
          <Image source={{uri: imageUri}} style={styles.uploadedQRImage} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  header: {
    height: 60,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {color: '#fff', fontSize: 18, fontWeight: 'bold'},

  cameraContainer: {flex: 1, position: 'relative'},
  overlay: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  scannerBox: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: Colors.primary,
    position: 'absolute',
  },
  topLeft: {
    top: -2,
    left: -2,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 10,
  },
  topRight: {
    top: -2,
    right: -2,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 10,
  },
  bottomLeft: {
    bottom: -2,
    left: -2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 10,
  },
  bottomRight: {
    bottom: -2,
    right: -2,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 10,
  },

  bottomButtons: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconButton: {alignItems: 'center'},
  buttonText: {color: '#fff', marginTop: 8, fontSize: 14},

  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {color: '#fff', fontSize: 16},
  permissionRetryText: {color: '#4CAF50', fontSize: 18, marginTop: 10},

  uploadedQRContainer: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  uploadedQRText: {color: '#000', fontSize: 16, marginBottom: 10},
  uploadedQRImage: {width: 200, height: 200, resizeMode: 'contain'},
});
