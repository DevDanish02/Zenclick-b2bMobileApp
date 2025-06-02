const {User} = require('../models/User.models');
const bcrypt = require('bcrypt');

exports.signUpController = async (req, res) => {
  try {
    const {name, email, phoneNumber, password, confirmPassword, shopName} =
      req.body;

    console.log('Received data:', req.body);

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword ||
      !shopName
    ) {
      return res.status(401).json({
        success: false,
        message: 'All Fields Are Required',
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          'Password and Confirm Password do not match. Please try again.',
      });
    }
    // console.log('confirmPassword', confirmPassword);
    const existingUser = await User.findOne({where: {email, phoneNumber}});
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists. Please sign in to continue.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      shopName,
    });

    console.log('user is : ', user);

    return res.status(200).json({
      success: true,
      message: 'Signup Successfully',
      data: user,
    });
  } catch (error) {
    console.error('YUajflkjdsklfj', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'user not exits',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User Fetched Successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.statu(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({where: {id: userId}});

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'user for this id is not exist',
      });
    }

    res.status(200).json({
      success: true,
      message: 'User for this id fetched successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // const user = await User.destroy({where:{id: userId}});
    const user = await User.findByPk(userId);
    console.log('fnklafndklfj', user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'user not found',
      });
    }
    await user.destroy();
    return res.status(200).json({
      success: true,
      message: 'user deleted successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const {email, phoneNumber, password} = req.body;

    // Check if password is provided
    if (!password || (!email && !phoneNumber)) {
      return res.status(401).json({
        success: false,
        message: 'Email/Phone number and password are required',
      });
    }

    // Search for user by either email or phoneNumber
    let user;
    if (email) {
      user = await User.findOne({where: {email}});
    } else if (phoneNumber) {
      user = await User.findOne({where: {phoneNumber}});
    }

    // If user not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please sign up first.',
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    // If password matches
    if (isMatch) {
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: user,
      });
    }

    // If password does not match
    return res.status(401).json({
      success: false,
      message: 'Password does not match',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
