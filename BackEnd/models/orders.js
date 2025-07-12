const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
  customername: {
    type: String,
    required: [true, 'Customer Name is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  email: {
    type: String,
    required: [true, 'Email Id is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  phone: {
    type: Number,
    required: [true],
    trim: true,
  },
  service: String,
  fileName: String,
  uploadTime: {
    type: Date,
    default: Date.now,
  },
  pages: Number,
  copies: Number,
  totalAmount: Number,
  status: {
    type: String,
    default: 'pending',
  },
  pdfUrl: String,
  colorMode: String,
  paperSize: String,
  orientation: String,
  priority: String,
  notes: String,
  completedTime: {
    type: Date,
    default: null,
  },
  estimatedTime: String,
});

module.exports = mongoose.model('Orders', ordersSchema);
