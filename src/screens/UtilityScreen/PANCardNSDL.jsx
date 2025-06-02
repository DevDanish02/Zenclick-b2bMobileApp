import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {Ionicons} from '../../constants/Icon'; // Import for the back icon
import LinearGradient from 'react-native-linear-gradient'; // For gradient background
import Colors from '../../constants/Colors'; // Assuming you have a Colors file for color management

const PANCardNSDL = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApply = () => {
    if (!fullName || !dob || !mobile || !email) {
      ToastAndroid.show('Please fill all fields!', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show(
        'Application Submitted Successfully!',
        ToastAndroid.SHORT,
      );
      navigation.goBack();
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Apply for PAN Card</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Full Name */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#666"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* Date of Birth */}
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (DD/MM/YYYY)"
            placeholderTextColor="#666"
            value={dob}
            onChangeText={setDob}
          />

          {/* Mobile Number */}
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />

          {/* Email ID */}
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Apply Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleApply}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Apply Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PANCardNSDL;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#111',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary, // Use primary color from Colors.js
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white, // Use white color from Colors.js
    fontSize: 18,
    fontWeight: 'bold',
  },
});
