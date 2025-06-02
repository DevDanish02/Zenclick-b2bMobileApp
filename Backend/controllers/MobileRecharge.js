const apiService = require('../services/apiService');
const logger = require('../utils/logger');

const rechargeController = {
  async initiateRecharge(req, res) {
    try {
      const {outlet, billerId} = req.body;

      if (!outlet || !billerId) {
        return res
          .status(400)
          .json({error: 'Outlet and BillerId are required'});
      }

      const result = await apiService.rechargeCircle(outlet, billerId);
      res.status(200).json({
        message: 'Recharge initiated successfully',
        data: result,
      });
    } catch (error) {
      logger.error(`Recharge failed: ${error.message}`);
      res
        .status(500)
        .json({error: 'Internal Server Error', message: error.message});
    }
  },

  async recharge(req, res) {
    try {
      const {outlet} = req.body;

      if (!outlet) {
        return res.status(400).json({
          error: 'Invalid request format',
          message: 'outlet is required',
        });
      }

      const result = await apiService.mobileRecharge({outlet});

      res.status(200).json({
        message: 'Recharge initiated successfully',
        data: result,
      });
    } catch (error) {
      console.error('Error details:', error); // Detailed error logging
      logger.error(`Recharge failed: ${error.message}`);
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  },

  async initiatePayment(req, res) {
    try {
      const paymentData = req.body;
      console.log(paymentData);

      // Call the API service to process the payment
      const result = await apiService.rechargePayment(paymentData);
      // console.log(' result', result);

      // If payment is successful, return success response
      res.status(200).json({
        message: 'Payment processed successfully',
        data: result, // Send back the API response data
      });
    } catch (error) {
      // Log the error and return an internal server error
      logger.error(`Payment processing failed: ${error.message}`);
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  },

  // Controller to handle account verification request
  async verifyAccount(req, res) {
    const {ifsc, accNo, benificiaryName, address} = req.body;

    try {
      // Input validation
      if (!ifsc || !accNo || !benificiaryName || !address) {
        return res.status(400).json({
          error: 'Bad Request',
          message: 'All fields are required',
        });
      }

      // Call service to verify account
      const verificationResult = await apiService.verifyAccountDetails(
        ifsc,
        accNo,
        benificiaryName,
        address,
      );

      // Return the result
      res.status(200).json({
        message: 'Account verification successful',
        data: verificationResult,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  },
};

// Handle the initiation of payment

module.exports = rechargeController;
