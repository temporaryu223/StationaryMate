const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./db/db');
const cors = require('cors');
const services = require('./models/services');
const app = express();
const serviceRouter = require('./routes/servicesRoutes');
const ordersRouter = require('./routes/ordersRoutes');
const pdfUploadRouter = require('./routes/pdfUploadRoutes');
const basketRouter = require('./routes/basketRoutes');
const authRouter = require('./routes/authRoutes');
const raazorpayRouter = require('./routes/razorpayRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/services', serviceRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/pdfs/', pdfUploadRouter);
app.use('/api/auth', authRouter);
app.use('/api/basket', basketRouter);
app.use('/api/razorpay', raazorpayRouter);

app.post('/', (req, res) => {
  console.log('we got a response');
  res.status(200).json({ message: 'Hello' });
});

database();

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
