const getAllServices = require('../controllers/servicesController');
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const serviceRouter = express.Router();

serviceRouter.get('/get', getAllServices);

module.exports = serviceRouter;
