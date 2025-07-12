const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  icon: {
    type: String,
    required: [true, 'icon name is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  gradient: {
    type: String,
    required: [true, 'gradient name is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
    trim: true,
    maxLength: [100, 'Max Length should be less than 100'],
  },
  features: {
    type: [String],
    required: [true, 'features list is required'],
    validate: [(arr) => arr.length > 0, 'At least one feature is required'],
  },
  pricePerPage: {
    type: Number,
    required: [true, 'Price Per Page is Required'],
    min: [0, 'Price cannot be negative'],
  },
  deliveryTime: {
    type: String,
    required: [true, 'Delivery Time is Required'],
    trim: true,
    maxLength: [50, 'Max Length is Required'],
  },
  color: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Services', ServicesSchema);
