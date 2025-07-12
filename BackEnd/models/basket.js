const mongoose = require('mongoose');

const basketSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  service: String,
  fileName: String,
  uploadTime: {
    type: Date,
    default: Date.now(),
  },
  pages: Number,
  copies: Number,
  totalAmount: Number,
  pdfUrl: String,
  colorMode: String,
  paperSize: String,
  orientation: String,
  notes: String,
});

module.exports = mongoose.model('Basket', basketSchema);
