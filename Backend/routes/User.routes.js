const express = require('express');
const router = express.Router();

const {
  signUpController,
  getUser,
  getUserById,
  deleteUserById,
  loginController,
} = require('../controllers/Auth');

router.post('/signup', signUpController);
router.get('/getsignup', getUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);

//login

router.post('/login', loginController);

module.exports = router;
