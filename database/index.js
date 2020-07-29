const mongoose = require('mongoose');

//development:
mongoose.connect('mongodb://localhost/mainTitle_price');

//production:
//mongoose.connect('mongodb://ec2-52-14-208-55.us-east-2.compute.amazonaws.com/Price', { useUnifiedTopology: true, useNewUrlParser: true });

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
  return Price.find({ itemId: itemId }).select('-_id -__v').lean().exec();
};

const getTitleAndPrices = (itemIds) => {
  return Price.find({ itemId: { $in: itemIds } }).select('-_id -__v').lean().exec();
};

module.exports.Price = Price;
module.exports.db = db;
module.exports.getTitleAndPrice = getTitleAndPrice;
module.exports.getTitleAndPrices = getTitleAndPrices;