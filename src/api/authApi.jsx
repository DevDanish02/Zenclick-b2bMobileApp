import axios from 'axios';

const API_URL2 = 'http://192.168.1.4:3000/api/user/login';
const API_URL = 'http://192.168.1.4:3000/api/user/signup';

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidMobile = mobile => /^[6-9]\d{9}$/.test(mobile);

export const signup = async ({
  phoneNumber,
  name,
  shopName,
  email,
  password,
  confirmPassword,
}) => {
  if (
    !phoneNumber ||
    !name ||
    !shopName ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    throw new Error('All fields are required');
  }
  if (!isValidMobile(phoneNumber)) {
    throw new Error('Invalid mobile number');
  }
  if (!isValidEmail(email)) {
    throw new Error('Invalid email address');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        phoneNumber,
        name,
        shopName,
        email,
        password,
        confirmPassword: password,
      },
      {timeout: 10000},
    );

    return response.data;
  } catch (error) {
    const serverMessage = error.response?.data?.message || '';
    if (
      serverMessage.toLowerCase().includes('email already exists') ||
      serverMessage.toLowerCase().includes('already registered')
    ) {
      throw new Error('Email is already registered. Please login.');
    }
    console.error('Signup error:', error);
    throw error;
  }
};

export const login = async (emailOrPhone, password) => {
  if (!emailOrPhone || !password) {
    throw new Error('Email/Phone number and password are required');
  }

  // Check if the input is an email or phone number
  const isEmail = isValidEmail(emailOrPhone);

  let body = {password};
  if (isEmail) {
    body.email = emailOrPhone; // If it's an email, add email to the body
  } else {
    body.phoneNumber = emailOrPhone; // If it's a phone number, add phoneNumber to the body
  }

  try {
    const response = await axios.post(API_URL2, body, {timeout: 10000});

    return response.data;
  } catch (error) {
    if (error.response) {
      const serverMessage = error.response.data?.message || '';
      if (
        serverMessage.toLowerCase().includes('invalid') ||
        serverMessage.toLowerCase().includes('not found') ||
        serverMessage.toLowerCase().includes('wrong')
      ) {
        throw new Error(
          'Invalid email/phone number or password. Please try again.',
        );
      }
      console.error('Login API Response Error:', error.response.data);
    } else if (error.request) {
      console.error('Login No Response Error:', error.request);
    } else {
      console.error('Login General Error:', error.message);
    }
    throw error;
  }
};
