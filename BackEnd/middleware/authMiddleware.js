const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token provided. Access denied.',
    });
  }
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    console.log('Token', decodedTokenInfo);
    next();
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: 'Login Expired, Kindly Login...',
    });
  }
};

module.exports = authMiddleware;
