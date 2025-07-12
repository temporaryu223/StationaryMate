const express = require('express');
const {
  addToBasket,
  getAllItemsByMail,
  deleteItemById,
  checkOut,
} = require('../controllers/basketControllers');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', uploadMiddleware.single('pdf'), addToBasket);
router.get('/getAll/:email', authMiddleware, getAllItemsByMail);
router.delete('/deleteItem/:id', authMiddleware, deleteItemById);
router.post('/checkout/:email', checkOut);
module.exports = router;
