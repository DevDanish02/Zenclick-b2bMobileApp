import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const OTPVerificationScreen = ({navigation, route}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  const inputs = useRef([]);

  const phone = route.params?.phone || '**********'; // fallback

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
      {text: 'OK', onPress: () => navigation.navigate('Main')}, // or navigation.navigate('Home')
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify</Text>
      <Text style={styles.subtitle}>Enter the OTP we’ve sent to</Text>
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

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify & Continue</Text>
      </TouchableOpacity>

      <Text style={styles.timer}>
        Didn’t get a text? ⏱ {timer < 10 ? `00:0${timer}` : `00:${timer}`}
      </Text>

      <Text style={styles.callOption}>
        📞 <Text style={styles.callLink}>Get via Call</Text> ⏱{' '}
        {timer < 10 ? `00:0${timer}` : `00:${timer}`}
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
    // justifyContent: 'center',
    marginVertical: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 55,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timer: {
    fontSize: 14,
    // textAlign: '',
    marginTop: 10,
    color: '#555',
  },
  callOption: {
    fontSize: 14,
    // textAlign: 'center',
    marginTop: 5,
    color: '#555',
  },
  callLink: {
    color: '#FF713C',
    fontWeight: '600',
  },
});

export default OTPVerificationScreen;

// import React, { useRef, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function OtpScreen() {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const inputRefs = useRef([]);
//   const navigation = useNavigation();
//   const route = useRoute();

//   const phoneNumber = route.params?.phone || ''**********;

//   const handleChange = (text, index) => {
//     if (/^\d$/.test(text)) {
//       const newOtp = [...otp];
//       newOtp[index] = text;
//       setOtp(newOtp);

//       if (index < 3) inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleVerify = () => {
//     if (otp.every(d => d)) {
//       const enteredOtp = otp.join('');
//       console.log("Entered OTP:", enteredOtp);
//       // Optionally verify via API here
//       navigation.navigate('Main');
//     } else {
//       alert('Please enter the complete 4-digit OTP');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify</Text>
//       <Text style={styles.subtitle}>Enter the OTP we’ve sent to</Text>
//       <Text style={styles.number}>
//         {phoneNumber} <Text style={styles.edit}>EDIT</Text>
//       </Text>

//       <View style={styles.otpContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.input}
//             maxLength={1}
//             keyboardType="number-pad"
//             value={digit}
//             onChangeText={text => handleChange(text, index)}
//             ref={ref => inputRefs.current[index] = ref}
//           />
//         ))}
//       </View>

//       <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
//         <Text style={styles.verifyText}>Verify</Text>
//       </TouchableOpacity>

//       <Text style={styles.timer}>Didn’t get a text? ⏱️ 00:60</Text>
//       <TouchableOpacity>
//         <Text style={styles.call}>📞 Get via Call ⏱️ 00:60</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 30, flex: 1, backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   subtitle: { color: '#555' },
//   number: { fontWeight: 'bold', fontSize: 16, marginTop: 5 },
//   edit: { color: 'orange' },
//   otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     width: 50,
//     height: 50,
//     textAlign: 'center',
//     fontSize: 18,
//   },
//   verifyButton: {
//     marginTop: 30,
//     backgroundColor: '#ff7f50',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   verifyText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
//   timer: { color: '#888', marginTop: 20 },
//   call: { color: 'orange', marginTop: 5 },
// });
