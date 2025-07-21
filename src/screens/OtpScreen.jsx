import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors'; // Use your color constants

const OTPVerificationScreen = ({navigation, route}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);
  const phone = route.params?.phone || '**********';

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length !== 4) {
      Alert.alert('Error', 'Please enter the 4-digit OTP');
      return;
    }
    Alert.alert('Success', `OTP ${enteredOTP} verified`, [
      {text: 'OK', onPress: () => navigation.navigate('Main')},
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>
              Enter the OTP sent to your phone
            </Text>
            <Text style={styles.phone}>
              {phone} <Text style={styles.edit}>EDIT</Text>
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                  ref={ref => (inputs.current[index] = ref)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.verifyButton}
              onPress={handleVerify}>
              <Text style={styles.verifyText}>Verify & Continue</Text>
            </TouchableOpacity>

            <Text style={styles.timer}>
              Didn’t get a text? ⏱ {timer < 10 ? `00:0${timer}` : `00:${timer}`}
            </Text>

            <Text style={styles.callOption}>
              📞 <Text style={styles.callLink}>Get via Call</Text> ⏱{' '}
              {timer < 10 ? `00:0${timer}` : `00:${timer}`}
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.grayWhite,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: Colors.textDark,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
  },
  phone: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    color: Colors.textDark,
  },
  edit: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Colors.gray,
    width: 50,
    height: 60,
    marginHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    color: Colors.textDark,
    backgroundColor: Colors.grayWhite,
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  verifyText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  timer: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 10,
  },
  callOption: {
    fontSize: 14,
    color: Colors.gray,
  },
  callLink: {
    color: Colors.green,
    fontWeight: '600',
  },
});
