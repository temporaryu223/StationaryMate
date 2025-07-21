const mongoose = require('mongoose');
const isShopOpen = require('../models/isShopOpen');

const update = async (req, res) => {
  try {
    const status = await isShopOpen.findOne();
    status.isOpen = !status.isOpen;
    status.save();
    return res.status(200).json({
      success: true,
      message: 'updated Successfully!',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: 'unable to update',
    });
  }
};

const getStatus = async (req, res) => {
  try {
    const status = await isShopOpen.findOne();

    res.status(200).json({
      success: true,
      message: 'Got Status',
      status: status.isOpen,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: 'unable to update',
    });
  }
};

module.exports = { update, getStatus };
