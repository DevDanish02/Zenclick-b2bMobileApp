import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const OTPVerificationScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  const inputs = useRef([]);

  const phone = route.params?.phone || '8433116360'; // fallback

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
    Alert.alert('Success', 'OTP Verified');
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify</Text>
      <Text style={styles.subtitle}>Enter the OTP we’ve sent to</Text>
      <Text style={styles.phone}>{phone} <Text style={styles.edit}>EDIT</Text></Text>

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

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify & Continue</Text>
      </TouchableOpacity>

      <Text style={styles.timer}>
        Didn’t get a text? ⏱ {timer < 10 ? `00:0${timer}` : `00:${timer}`}
      </Text>

      <Text style={styles.callOption}>
        📞 <Text style={styles.callLink}>Get via Call</Text> ⏱ {timer < 10 ? `00:0${timer}` : `00:${timer}`}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
  },
  phone: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 10,
  },
  edit: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 55,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timer: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  callOption: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#555',
  },
  callLink: {
    color: '#FF713C',
    fontWeight: '600',
  },
});

export default OTPVerificationScreen;
