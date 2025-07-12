const services = require('../models/services');

const getAllServices = async (req, res) => {
  try {
    const data = await services.find();
    res.status(200).json({
      success: true,
      message: 'Got all Services',
      data: data,
    });
  } catch (e) {
    console.log('Error in Getting all the Services ');
    res.status(200).json({
      success: false,
      message: "Can't get Services Now",
    });
  }
};
module.exports = getAllServices;
