const axios = require('axios');
const Joi = require('joi');
require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;

// ✅ Joi Validation Schemas
const validateRechargeData = data => {
  const schema = Joi.object({
    outlet: Joi.string().required(),
    // billerId: Joi.string().required(), // Uncomment if needed
  });

  return schema.validate(data); // ✅ RETURN the result
};

const validateRechargeDataForCircle = data => {
  const schema = Joi.object({
    outlet: Joi.string().required(),
    billerId: Joi.string().required(), // Add validation for billerId
  });

  return schema.validate(data);
};

const validatePaymentData = data => {
  const schema = Joi.object({
    outlet: Joi.string().required(),
    billerId: Joi.string().required(),
    externalRef: Joi.string().required(),
    enquiryReferenceId: Joi.string().required(),
    initChannel: Joi.string().required(),
    inputParametersparam1: Joi.string().allow(null), // Nullable, but if present, should be a string
    telecomCircle: Joi.string().allow(null), // Nullable, if present, should be a string
    deviceInfoterminalId: Joi.string().required(),
    deviceInfomobile: Joi.string().pattern(/^\d+$/).required(), // Mobile should be numeric
    deviceInfopostalCode: Joi.string().pattern(/^\d+$/).required(), // Postal code should be numeric
    deviceInfogeoCode: Joi.string().required(), // Geo code should be a string
    paymentMode: Joi.string().valid('Cash', 'Card', 'Online').required(), // Example options, can expand as needed
    paymentInfoRemarks: Joi.string().allow(null), // Nullable
    remarksparam1: Joi.string().pattern(/^\d+$/).required(), // Remarks should be numeric
    transactionAmount: Joi.number().greater(0).required(), // Transaction amount should be numeric and greater than 0
    customerPan: Joi.string().allow(''), // Allow empty string for customerPan
  });

  return schema.validate(data);
};

// ✅ Recharge API
const rechargeCircle = async (outlet, billerId) => {
  const {error} = validateRechargeDataForCircle({outlet, billerId});
  if (error) {
    throw new Error(`Validation failed: ${error.message}`);
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/prepaid/mobile/circle`,
      {outlet, billerId},
      {
        headers: {'Content-Type': 'application/json'},
        timeout: 5000,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to recharge: ${error.message}`);
  }
};

const mobileRecharge = async rechargeData => {
  const {error} = validateRechargeData(rechargeData);
  if (error) {
    throw new Error(`Validation failed: ${error.message}`);
  }

  const response = await axios.post(
    `${API_BASE_URL}/v1/prepaid/mobile/Recharge`,
    rechargeData,
    {
      headers: {'Content-Type': 'application/json'},
      timeout: 5000,
    },
  );

  return response.data;
};

const rechargePayment = async paymentData => {
  // Validate the payment data first
  const {error} = validatePaymentData(paymentData);
  if (error) {
    // Improved error handling and throwing validation error
    throw new Error(`Validation failed: ${error.message}`);
  }

  try {
    // Log the payment data before making the request
    console.log('Sending payment data:', paymentData);

    // Make the API request to process the payment
    const response = await axios.post(
      `${API_BASE_URL}/v1/prepaid/mobile/payment`,
      paymentData,
      {
        headers: {'Content-Type': 'application/json'},
        timeout: 5000, // Set appropriate timeout
      },
    );

    // Log the response to check for any issues in the API response
    console.log('API Response:', response.data);

    // Ensure response has the expected structure before returning
    if (response.data && response.data.success) {
      return response.data;
    } else {
      throw new Error(`Payment processing failed: ${response.data.message}`);
    }
  } catch (error) {
    // Improved error handling
    console.error(
      'API Error:',
      error.response ? error.response.data : error.message,
    );

    // Rethrow the error with a more descriptive message
    throw new Error(
      `Failed to process payment: ${
        error.response ? error.response.data.message : error.message
      }`,
    );
  }
};

const verifyAccountDetails = async (ifsc, accNo, benificiaryName, address) => {
  try {
    // API endpoint for account verification (update with actual endpoint)

    const requestData = {
      ifsc: ifsc,
      accNo: accNo,
      benificiaryName: benificiaryName,
      address: address,
    };

    // Sending the API request to verify account
    const response = await axios.post(
      `${API_BASE_URL}/account-verification`,
      requestData,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    // Returning the response from the API
    return response.data;
  } catch (error) {
    // Handle errors, log them and throw
    console.error('Error while verifying account:', error.message);
    throw new Error('Failed to verify account');
  }
};

module.exports = {
  rechargeCircle,
  mobileRecharge,
  rechargePayment,
  verifyAccountDetails,
};
