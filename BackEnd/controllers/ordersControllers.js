const { response } = require('express');
const fs = require('fs');
const orders = require('../models/orders');
const Orders = require('../models/orders');
const { uploadToSupabase } = require('../helpers/supabaseHelper');
const { createClient } = require('@supabase/supabase-js');
const { razorpay } = require('razorpay');
const nodemailer = require('nodemailer');
const { log } = require('console');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
// This Creates by uploading pdf
const createOrderByUploadingPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: 'No file uploaded' });
    }
    const { url, publicId } = await uploadToSupabase(req.file);
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });
    const user = JSON.parse(req.body.user);
    const amount = req.body.amount;
    const pages = req.body.pages;
    const service = JSON.parse(req.body.service);
    const color = req.body.color;
    const paperSize = req.body.paperSize;
    const orientation = req.body.orientation;
    const copies = req.body.copies;
    const side = req.body.side;

    fs.unlinkSync(req.file.path);
    const newOrder = await orders.create({
      customername: user.firstName,
      email: user.email,
      phone: user.mobile,
      service: service.title,
      fileName: req.file.originalname,
      pages: pages,
      copies: copies,
      totalAmount: amount,
      pdfUrl: url,
      colorMode: color === 'true' ? 'color' : 'black-white',
      paperSize: paperSize,
      orientation: orientation,
      priority: 'normal',
      side: side,
      notes: '',
      estimatedTime: '30 minutes',
    });

    await transporter.sendMail({
      to: user.email,
      from: process.env.EMAIL_HOST_USER,
      subject: 'Order Placed Successfully !!',
      text: `Dear User,
        You order has been placed successfully, please find the order details below.
Order Id     :${newOrder._id}
Customer Name:${newOrder.customername}
Service      :${newOrder.service}

You order will be Completed in ${newOrder.estimatedTime}, and will be notified once it is finished.

Thank you.

warm regards,
StationaryMate Team.`,
    });
    res
      .status(200)
      .json({ success: true, message: 'Order Created', data: newOrder });
  } catch (e) {
    console.log('Error in Creating Order', e);

    res.status(500).json({
      success: false,
      message: `Error in creating New Order` + e,
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const data = req.body;
    const newOrder = await Orders.create(data);
    if (newOrder) {
      res.status(200).json({
        success: true,
        message: `Created New Order with Id :${newOrder._id}`,
        data: newOrder,
      });
    }
  } catch (e) {
    console.log('Error in Creating Order', e);

    res.status(500).json({
      success: true,
      message: `Error in creating New Order`,
    });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const data = await Orders.find();
    res.status(200).json({
      success: true,
      message: 'All Orders are Available Now',
      data: data,
    });
  } catch (e) {
    console.log('Error in getting orders', e);
    res.status(500).json({
      success: false,
      message: "Can't get Orders Now",
    });
  }
};

const getAllOrdersByMail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await Orders.find({ email: email });
    console.log(data);

    res.status(200).json({
      success: true,
      message: 'All Orders are Available Now',
      data: data,
    });
  } catch (e) {
    console.log('Error in getting orders', e);
    res.status(500).json({
      success: false,
      message: "Can't get Orders Now",
    });
  }
};

const updateOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = req.body;
    const order = await Orders.findById(id);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });
    console.log(data.status);

    if (data.status == 'completed' || data.status == 'cancelled') {
      console.log('hi');

      await transporter.sendMail({
        to: order.email,
        from: process.env.EMAIL_HOST_USER,
        subject: 'Order Update Status',
        text: `Dear User,
          Your Order with Id ${id}, has been ${data.status}.Please kindly visit Stationary for more Details.
Thank You.

warm regards,
StationaryMate Team.`,
      });
    }
    const response = await Orders.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      success: true,
      message: `Updated the Order with ID:${id}`,
      data: data,
    });
  } catch (e) {
    console.log(`Unable to update the order with Id ${id}` + e);
    res.status(500).json({
      success: false,
      message: `Unable to update the order with Id ${id}`,
    });
  }
};

const deleteOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await orders.findById(id);
    result = await supabase.storage
      .from('pdfs')
      .remove(order.pdfUrl.split('/pdfs/')[1]);
    const response = await orders.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: `Deleted the order with ID${id}`,
      data: response,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: `Unable to Delete the order with ID${id}`,
    });
  }
};

module.exports = [
  createOrder,
  getAllOrders,
  updateOrderById,
  deleteOrderById,
  createOrderByUploadingPdf,
  getAllOrdersByMail,
];
