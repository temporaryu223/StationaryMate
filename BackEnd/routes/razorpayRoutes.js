const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/razorPayContollers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createOrder);

module.exports = router;
