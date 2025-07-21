import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('MainTab');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}>
          <View style={styles.card}>
            {/* Logo and Title inside card */}
            <Image
              source={require('../assets/images/Zc1.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome back.</Text>

            {/* Input Fields */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                navigation.navigate('Otp');
              }}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.divider} />
            </View>

            {/* Google Login */}
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={handleGoogleLogin}>
              <Image
                source={require('../assets/images/google.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>

            {/* Sign Up */}
            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  // card: {
  //   backgroundColor: Colors.white,
  //   padding: 24,
  //   borderRadius: 16,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.08,
  //   shadowRadius: 12,
  //   elevation: 6,
  //   width: '100%',
  //   maxWidth: 400, // 👈 prevent too wide on tablets
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   marginBottom: 40,
  // },

  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.textDark,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    fontSize: 16,
    marginBottom: 16,
    color: Colors.gray,
    backgroundColor: Colors.white,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: Colors.gray,
    fontSize: 13,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  loginText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.primary,
  },
  orText: {
    marginHorizontal: 10,
    color: Colors.gray,
    fontSize: 14,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: Colors.gray,
    fontWeight: '500',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: Colors.gray,
    fontSize: 14,
  },
  signupLink: {
    color: Colors.green,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
