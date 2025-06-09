import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const [input, setInput] = useState('');

  const handleNext = () => {
    console.log('Next clicked:', input);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
         <Image
      source={require('../assets/images/zenklick.jpeg')}
      style={styles.logo}
    />
        <Text style={styles.title}>Login to Zenklick</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile number or email ID"
          placeholderTextColor="#777"
          value={input}
          onChangeText={setInput}
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate('Otp');
          }}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}>
          <MaterialCommunityIcons
            name="google"
            size={20}
            color="#db4437"
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Login With Google</Text>
        </TouchableOpacity>

        {/* <Text style={styles.footer}>
          Don’t have an account? <Text style={styles.signUp}>Sign Up</Text>
        </Text> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#3a5aff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 14,
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 8,
  },
  googleText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#555',
    marginTop: 24,
  },
  signUp: {
    color: '#3a5aff',
    fontWeight: 'bold',
  },
});
