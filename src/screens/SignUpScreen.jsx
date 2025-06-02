import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AntDesign,
  FontAwesome,
  Entypo,
  Ionicons,
  MaterialIcons,
} from '../constants/Icon';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import {handleSignup} from '../Handler/auth/handleRegistration';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.textContainer}>
          <Text style={styles.textSignUp}>Sign Up</Text>
          <Text style={styles.createAccountText}>Create a new Account</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Mobile No"
              keyboardType="phone-pad"
              value={mobile}
              maxLength={10}
              onChangeText={setMobile}
            />
            <AntDesign name="mobile1" size={20} color="gray" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Name"
              value={name}
              onChangeText={setName}
            />
            <FontAwesome name="user" size={20} color="gray" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Shop Name"
              value={shopName}
              onChangeText={setShopName}
            />
            <Entypo name="shop" size={20} color="gray" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Email ID"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
            <FontAwesome name="envelope" size={20} color="gray" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                name={showPassword ? 'eye' : 'eye-with-line'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Entypo
                name={showConfirmPassword ? 'eye' : 'eye-with-line'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAgreeTerms(!agreeTerms)}>
              {agreeTerms ? (
                <Ionicons name="checkbox" size={22} color={Colors.primary} />
              ) : (
                <Ionicons name="checkbox-outline" size={22} color="gray" />
              )}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the
              <Text style={styles.linkText}> Terms & Conditions</Text>
            </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnForPress}
            onPress={() =>
              handleSignup({
                mobile,
                name,
                shopName,
                email,
                password,
                confirmPassword,
                agreeTerms,
                navigation,
              })
            }
            activeOpacity={0.7}>
            <Text style={styles.sendOtpBtn}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
        </View>

        <View style={styles.footerText}>
          <Text style={styles.footerInnerText1}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLoginText}> Login Now!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpFooter}>
          <MaterialIcons
            name="support-agent"
            size={24}
            color="gray"
            style={{marginRight: 5}}
          />
          <Text style={styles.supportText}>Support -</Text>
          <TouchableOpacity onPress={() => Linking.openURL('tel:02242123123')}>
            <Text style={styles.helpNumber}>02242123123</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textSignUp: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  createAccountText: {
    fontSize: 18,
    color: 'gray',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    fontSize: 14,
    color: 'black',
  },
  linkText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  btnForPress: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: '90%',
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 3,
  },
  sendOtpBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerInnerText1: {
    fontSize: 14,
    color: 'black',
  },
  footerLoginText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  signUpFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  supportText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  helpNumber: {
    fontSize: 15,
    color: 'black',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});
