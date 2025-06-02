import Toast from 'react-native-toast-message';
import {signup} from '../../api/authApi';

export const handleSignup = async ({
  mobile,
  name,
  shopName,
  email,
  password,
  confirmPassword,
  navigation,
}) => {
  // Validation checks
  if (
    !mobile ||
    !name ||
    !shopName ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    Toast.show({
      type: 'error',
      text1: 'Missing Fields',
      text2: 'Please fill in all the details.',
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Toast.show({
      type: 'error',
      text1: 'Invalid Email',
      text2: 'Please enter a valid email address.',
    });
    return;
  }

  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(mobile)) {
    Toast.show({
      type: 'error',
      text1: 'Invalid Mobile',
      text2: 'Please enter a valid 10-digit mobile number.',
    });
    return;
  }

  if (password.length < 6) {
    Toast.show({
      type: 'error',
      text1: 'Weak Password',
      text2: 'Password must be at least 6 characters long.',
    });
    return;
  }

  if (password !== confirmPassword) {
    Toast.show({
      type: 'error',
      text1: 'Password Mismatch',
      text2: 'Passwords do not match.',
    });
    return;
  }

  try {
    // Signup API call
    const response = await signup({
      phoneNumber: mobile,
      name,
      shopName,
      email,
      password,
      confirmPassword,
    });

    // Success toast
    Toast.show({
      type: 'success',
      text1: 'Signup Successful!',
      text2: 'Please log in to your account.',
    });

    navigation.navigate('Login');
  } catch (error) {
    // Handle different error messages
    const errMsg = error.response?.data?.message?.toLowerCase();

    // Error handling for already existing email/mobile
    if (errMsg?.includes('already') || errMsg?.includes('exists')) {
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
        text2: 'This email or mobile number is already registered.',
      });
    } else if (errMsg?.includes('network') || errMsg?.includes('timeout')) {
      Toast.show({
        type: 'error',
        text1: 'Network Error',
        text2: 'Please check your internet connection and try again.',
      });
    } else {
      // General error message
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
        text2: 'Something went wrong. Please try again.',
      });
    }
  }
};
