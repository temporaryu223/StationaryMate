const [
  createOrder,
  getAllOrders,
  updateOrderById,
  deleteOrderById,
  createOrderByUploadingPdf,
  getAllOrdersByMail,
] = require('../controllers/ordersControllers');
const authMiddleware = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const express = require('express');

const ordersRouter = express.Router();

ordersRouter.get('/get', authMiddleware, getAllOrders);
ordersRouter.get(
  '/getallordersbymail/:email',
  authMiddleware,
  getAllOrdersByMail,
);
ordersRouter.post('/create', createOrder);
ordersRouter.put('/update/:id', updateOrderById);
ordersRouter.delete('/delete/:id', deleteOrderById);

ordersRouter.post(
  '/createOrder',
  uploadMiddleware.single('pdf'),
  createOrderByUploadingPdf,
);

module.exports = ordersRouter;
