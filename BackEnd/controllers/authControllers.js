const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const otpStore = {};

const register = async (req, res) => {
  try {
    const userDetails = req.body;
    console.log(userDetails);

    const checkExistingUser = await User.findOne({ email: userDetails.email });

    if (checkExistingUser) {
      res.status(500).json({
        success: false,
        message: 'Email-Id already Exist try using other Email',
      });
      return;
    }
    // if (userDetails.password1 != userDetails.password2) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Both Passwords doesn't match",
    //   });
    //   return;
    // }
    if (
      otpStore[userDetails.email].expiresAt < Date.now ||
      otpStore[userDetails.email].otp != userDetails.otp
    ) {
      return res.status(500).json({
        success: false,
        message: 'OTP Expired or OTP donot match ...',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password1, salt);
    console.log(userDetails);

    if (userDetails.year) {
      const newUser1 = new User({
        firstName: userDetails.name,
        email: userDetails.email,
        password: hashedPassword,
        rollNumber: userDetails.rollNumber,
        gender: userDetails.gender,
        branch: userDetails.branch,
        year: userDetails.year,
        mobile: userDetails.mobile,
      });
      await newUser1.save();
      if (newUser1) {
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
    } else {
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

const otp = async (req, res) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });
    const { email } = req.body;
    if (!email)
      res.status(500).json({ success: false, message: 'Email is Required' });
    otpStore[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };
    await transporter.sendMail({
      from: process.env.EMAIL_HOST_USER,
      to: email,
      subject: 'OTP for StationaryMate',
      text: `Dear User,
        Your OTP for the StationaryMate is ${otp}. it will expires in 10 minutes.

Thank You
        
warm regards,
StationaryMate team.`,
    });
    console.log(otpStore);

    return res.status(200).json({
      success: true,
      message: 'OTP Sent Successfully!!',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: 'Unable to send the OTP, Try again later...' + e,
    });
  }
};
module.exports = { register, login, otp };
