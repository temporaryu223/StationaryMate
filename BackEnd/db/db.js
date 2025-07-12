const mongoose = require('mongoose');

database = async () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log('Database connected Successfully');
    })
    .catch((e) => {
      console.log('Database connection Failed', e);
    });
};

module.exports = database;
