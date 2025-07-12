const basket = require('../models/basket');
const orders = require('../models/orders');
const users = require('../models/users');
const { uploadToSupabase } = require('../helpers/supabaseHelper');
const fs = require('fs');
const createClient = require('@supabase/supabase-js');
const supabase = createClient.createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const addToBasket = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: 'No file uploaded' });
    }
    const user = JSON.parse(req.body.user);
    const { url, publicId } = await uploadToSupabase(req.file);
    const newBasket = await basket.create({
      email: user.email,
      service: req.body.service,
      fileName: req.file.originalname,
      pages: req.body.pages,
      copies: req.body.copies,
      totalAmount: req.body.amount,
      pdfUrl: url,
      colorMode: req.body.color === 'true' ? 'color' : 'black-white',
      paperSize: req.body.paperSize,
      orientation: req.body.orientation,
      notes: '',
    });
    fs.unlinkSync(req.file.path);
    res.status(200).json({
      success: true,
      message: 'Item Added to Basket',
      data: newBasket,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Unable To Add to Basket',
    });
  }
};

const getAllItemsByMail = async (req, res) => {
  try {
    const email = req.params.email;
    const items = await basket.find({ email: email });
    res.status(200).json({
      success: true,
      message: 'Got all the mails',
      items: items,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Unable to get all items,try again later...',
    });
  }
};

const deleteItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await basket.findOne({ _id: id });
    const response = await basket.findByIdAndDelete(id);
    const result = await supabase.storage
      .from('pdfs')
      .remove(item.pdfUrl.split('/pdfs/')[1]);
    res.status(200).json({
      success: true,
      message: 'Item Deleted Succesfully',
    });
    if (response & result) {
      res.status(200).json({
        success: true,
        message: 'Item Deleted',
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'Unable to Delete Item',
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Unable to Delete Item',
    });
  }
};

const checkOut = async (req, res) => {
  try {
    const email = req.params.email;

    const items = await basket.find({ email: email });
    const user = await users.findOne({ email: email });
    console.log(user);
    for (const item of items) {
      const newOrder = await orders.create({
        customername: user.firstName,
        email: email,
        phone: user.mobile,
        service: item.service,
        fileName: item.fileName,
        pages: item.pages,
        copies: item.copies,
        totalAmount: item.totalAmount,
        pdfUrl: item.pdfUrl,
        colorMode: item.colorMode,
        paperSize: item.paperSize,
        orientation: item.orientation,
        notes: '',
        estimatedTime: '30 minutes',
      });
      if (newOrder) {
        const deleteStatus = await basket.findByIdAndDelete(item._id);
        if (deleteStatus) {
          continue;
        }
      } else {
        console.log(newOrder);

        return res.status(500).json({
          success: false,
          message: 'Unable to Check out,Plaese try Again later',
        });
      }
    }
    return res.status(200).json({
      success: true,
      message: 'Basket Checked Out ...',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Unable to Check out,Plaese try Again later...',
    });
  }
};
module.exports = { addToBasket, getAllItemsByMail, deleteItemById, checkOut };
