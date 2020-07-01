const db = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');

const itemData = [
  {
    itemId: '100',
    price: 12.99,
    currency: '$'
  },
  {
    itemId: '101',
    price: 9.99,
    currency: '$'
  },
  {
    itemId: '102',
    price: 11.49,
    currency: '$'
  },
  {
    itemId: '103',
    price: 8.99,
    currency: '$'
  },
  {
    itemId: '104',
    price: 2.45,
    currency: '$'
  },
  {
    itemId: '105',
    price: 10.99,
    currency: '$'
  },
  {
    itemId: '106',
    price: 4.99,
    currency: '$'
  },
  {
    itemId: '107',
    price: 8.98,
    currency: '$'
  },
  {
    itemId: '108',
    price: 6.99,
    currency: '$'
  },
  {
    itemId: '109',
    price: 5.95,
    currency: '$'
  }
];


const generateRecords = (num) => {
  var itemId = 110;

  //const digits = [0,1,2,3,4,5,6,7,8,9];

  for (var i = 0; i < num; i++) {
    var lastDigit = Math.floor(Math.random() * 10);

    if (lastDigit === 0) {
      lastDigit = 9;
    }

    var newDoc = {
      itemId: itemId,
      price: `${Math.floor(Math.random() * 90 + 10)}.${Math.floor(Math.random() * 10)}${lastDigit}`,
      currency: '$'
    }

    itemData.push(newDoc);
    itemId++;
  }

};

generateRecords(90);


const insertItemData = (items) => {
  db.Price.create(items)
    .then(() => {
      console.log('db seeded with title/price');
      mongoose.connection.close();
    })
    .catch(err => {
      console.log('error seeding title/price in db: ', err);
    })
};

//call that func
insertItemData(itemData);