const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mainTitle_price');

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to mainTitle_price db');
});

db.once('open', () => {
  console.log('connected to mainTitle_price db');
});

const priceSchema = mongoose.Schema({
  itemId: String,
  price: {
    type: Number,
    required: true
  },
  currency: String
});

const Price = mongoose.model('Price', priceSchema);

const getTitleAndPrice = (itemId) => {
  return Price.find({itemId: itemId}).select('-_id -__v').lean().exec();
};

module.exports.Price = Price;
module.exports.db = db;
module.exports.getTitleAndPrice = getTitleAndPrice;