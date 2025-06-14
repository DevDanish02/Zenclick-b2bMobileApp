import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OtpScreen = ({ navigation, route }) => {
  const { userInput } = route.params || {};
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);           // refs for each TextInput

  const handleChangeText = (text, index) => {
    // allow either a single digit or empty (for backspace)
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 5) {
        // move to next box on digit entry
        inputs.current[index + 1]?.focus?.();
      } else if (!text && index > 0) {
        // move back on backspace
        inputs.current[index - 1]?.focus?.();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      Alert.alert('Error', 'Please enter all 6 digits of the OTP');
      return;
    }

    // ✅ Accept ANY 6-digit OTP (demo). Replace this block with real verification if needed.
    Alert.alert('Success', `OTP ${enteredOtp} verified`, [
      { text: 'OK', onPress: () => navigation.goBack() }, // or navigation.navigate('Home')
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP for {userInput || 'your number'}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChangeText(text, index)}
            ref={ref => (inputs.current[index] = ref)}
            autoFocus={index === 0}
            returnKeyType="done"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#999',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#3a5aff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
