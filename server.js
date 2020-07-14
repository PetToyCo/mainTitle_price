const express = require('express');
const path = require('path');
const db = require('./database/index.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/public')));

//crossorigin permission for 3000, 3004 and 3006
app.use((req, res, next) => {
  const { referer } = req.headers;
  if (referer) {
    if (req.headers.referer.includes('3004')) {
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3004');
    } else if (req.headers.referer.includes('3006')) {
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3006');
    } else if (req.headers.referer.includes('3000')) {
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    }
  }
  next();
});

app.get('/itemPrice/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId < 100 || itemId > 199) {
    console.log(itemId);
    res.status(404).send('Invalid itemId');
  } else {
    db.getTitleAndPrice(itemId)
    .then(data => {
      console.log('success getting title and price');
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send();
      console.log('error in getTitleAndPrice');
    })
  }
});



module.exports = app;