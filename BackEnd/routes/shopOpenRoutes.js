const express = require('express');
const router = express.Router();
const { update, getStatus } = require('../controllers/shopOpenControllers');

router.get('/get', getStatus);
router.get('/update', update);

module.exports = router;
