const Razorpay = require('razorpay');
const razorPayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const amount = req.body.amount * 100;

    const response = await razorPayInstance.orders.create({
      amount: amount,
      currency: 'INR',
    });
    res.status(200).json({
      success: true,
      message: 'order created successfully',
      id: response.id,
      key: process.env.RAZORPAY_KEY_ID,
      amount: amount,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createOrder };
