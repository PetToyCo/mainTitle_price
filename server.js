const express = require('express');
const path = require('path');
const db = require('./database/index.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/itemPrice/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId < 100 || itemId > 199) {
    console.log(itemId);
    res.status(404).send('Invalid itemId');
  }

  db.getTitleAndPrice(itemId)
    .then(data => {
      console.log('success getting title and price: ', data);
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send();
      console.log('error in getTitleAndPrice: ', err);
    })
});


module.exports = app;