import Toast from 'react-native-toast-message';
import {login} from '../../api/authApi'; // your login API function

export const handleLogin = async ({emailOrPhone, password, navigation}) => {
  // Check if fields are empty before making the API call
  if (!emailOrPhone || !password) {
    Toast.show({
      type: 'error',
      text1: 'Missing Fields',
      text2: 'Please enter both email/phone and password.',
    });
    return;
  }

  try {
    // Attempt login with either email or phone
    const res = await login(emailOrPhone, password);

    // Navigate after successful login
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });

    // Success toast
    Toast.show({
      type: 'success',
      text1: 'Login Successful!',
      text2: 'Welcome to your Home.',
    });
  } catch (error) {
    const message = error.message?.toLowerCase();

    // Invalid email/phone or password
    if (
      message.includes('invalid') ||
      message.includes('not found') ||
      message.includes('wrong')
    ) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Invalid email/phone number or password.',
      });
    } else if (message.includes('password') && message.includes('match')) {
      // Password does not match
      Toast.show({
        type: 'error',
        text1: 'Incorrect Password',
        text2: 'The password you entered does not match our records.',
      });
    } else if (message.includes('email')) {
      // Invalid email format
      Toast.show({
        type: 'error',
        text1: 'Invalid Input',
        text2: 'Please enter a valid email address.',
      });
    } else if (message.includes('phone')) {
      // Invalid phone format or incorrect phone
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone Number',
        text2: 'Please enter a valid phone number.',
      });
    } else {
      // General error
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong. Please try again.',
      });
    }
  }
};
