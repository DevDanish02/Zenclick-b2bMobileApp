// routes/recharge.routes.js
const express = require('express');
// const {
//   getCircle,
//   doRecharge,
//   verifyAccount,
// } = require('../controllers/MobileRecharge'); // Import controller
const rechargeController = require('../controllers/MobileRecharge');

const router = express.Router();

router.post('/prepaid/mobile/circle', rechargeController.initiateRecharge);
router.post('/prepaid/mobile/payment', rechargeController.initiatePayment);
router.post('/account-verification', rechargeController.verifyAccount);
router.post('/prepaid/mobile/recharge', rechargeController.recharge);

module.exports = router;
