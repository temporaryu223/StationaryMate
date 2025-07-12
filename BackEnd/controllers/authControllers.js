const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const userDetails = req.body;
    const checkExistingUser = await User.findOne({ email: userDetails.email });

    if (checkExistingUser) {
      res.status(500).json({
        success: false,
        message: 'Email-Id already Exist try using other Email',
      });
      return;
    }
    if (userDetails.password1 != userDetails.password2) {
      res.status(500).json({
        success: false,
        message: "Both Passwords doesn't match",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password1, salt);
    console.log(userDetails);

    const newUser = new User({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      password: hashedPassword,
      mobile: userDetails.mobile,
    });

    await newUser.save();

    if (newUser) {
      res.status(200).json({
        success: true,
        message: 'User Created Successfully!!',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Unable to register User Try Again later...',
      });
    }
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: 'Unable to register User Try Again later...',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: `User doesn't exists`,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: `Invalid Credentials`,
      });
    }
    const accessToken = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: '30m',
      },
    );
    res.status(200).json({
      success: true,
      message: 'User Created Successfully!!',
      Token: accessToken,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Unable to register User Try Again later...',
    });
  }
};
module.exports = { register, login };
