const mongoose = require('mongoose');

const isShopOpenSchema = mongoose.Schema({
  isOpen: {
    type: Boolean,
    default: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('IsShopOpen', isShopOpenSchema);
