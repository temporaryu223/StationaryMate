const uploadToSupabase = require('../controllers/pdfController');
const express = require('express');
const pdf = require('../models/pdf');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const pdfuploadRouter = express.Router();

pdfuploadRouter.post(
  '/uploadpdf',
  uploadMiddleware.single('pdf'),
  uploadToSupabase,
);

module.exports = pdfuploadRouter;
