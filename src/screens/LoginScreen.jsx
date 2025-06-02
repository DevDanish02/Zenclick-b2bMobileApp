import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AntDesign, MaterialIcons, Entypo} from '../constants/Icon';
import {useNavigation} from '@react-navigation/native';
import {handleLogin} from '../Handler/auth/LoginHandler'; // Importing the refactored login function
import ZenKlick from '../assets/images/ZenKlick.jpeg';
import Colors from '../constants/Colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(''); // To show error messages if any

  // Basic Validation for email or phone number
  const validateInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10 digit phone number
    if (!emailOrPhone || !password) {
      setError('Both fields are required');
      return false;
    }
    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
      setError('Please enter a valid email or phone number');
      return false;
    }
    return true;
  };

  const handleLoginPress = async () => {
    if (!validateInput()) return;

    setError(''); // Reset error before making request
    setLoading(true);

    try {
      await handleLogin({emailOrPhone, password, navigation});
    } catch (error) {
      setError(error.message || 'Login failed, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image style={styles.imgContainer} source={ZenKlick} />

          <View style={styles.card}>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subheading}>Please login to your account</Text>

            <TextInput
              style={styles.input}
              placeholder="Mobile Number / Email ID"
              keyboardType="email-address"
              onChangeText={setEmailOrPhone}
              value={emailOrPhone}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Entypo
                  style={styles.eyeIcon}
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.forgotRow}>
              <Text style={styles.linkText}>Forgot Password?</Text>
              <Text style={styles.linkText}>Forgot PIN?</Text>
            </View>

            <Pressable
              style={styles.loginButton}
              onPress={navigation.navigate('Main')}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Text style={styles.loginText}>Login</Text>
                  <AntDesign name="arrowright" size={20} color="white" />
                </>
              )}
            </Pressable>

            <View style={styles.signUpRow}>
              <Text style={{fontSize: 16}}>I'm a new user,</Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}> Sign Up</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.supportRow}>
            <MaterialIcons
              name="support-agent"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.supportText}> Support -</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:02242123123')}>
              <Text style={styles.phone}> 02242123123</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.privacyRow}>
            <Text>Privacy Policy</Text>
            <Text> | Terms & Conditions</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  content: {
    padding: 20,
  },
  imgContainer: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 50,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 20,
    paddingVertical: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  forgotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  linkText: {
    color: Colors.primary,
    fontWeight: '500',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  supportRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  supportText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    borderBottomWidth: 1,
    marginLeft: 5,
  },
  privacyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});
