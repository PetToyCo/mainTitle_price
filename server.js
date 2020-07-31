const express = require('express');
const path = require('path');
const db = require('./database/index.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

//crossorigin permission for 3000, 3004 and 3006
app.use((req, res, next) => {
  //development
//   var address = 'http://127.0.0.1';

//   const { referer } = req.headers;
//   if (referer) {
//     if (req.headers.referer.includes('3004')) {
//       res.header('Access-Control-Allow-Origin', `${address}:3004`);
//     } else if (req.headers.referer.includes('3006')) {
//       res.header('Access-Control-Allow-Origin', `${address}:3006`);
//     } else if (req.headers.referer.includes('3000')) {
//       res.header('Access-Control-Allow-Origin', `${address}:3000`);
//     }
//   }
//   next();
// });

  //deployed
  var address1 = 'http://52.14.208.55'; //my proxy
  var address2 = 'http://54.183.137.155'; //recommendation service
  var address3 = 'http://18.224.229.28'; //delivery service

  const { referer } = req.headers;
  if (referer) {
    if (req.headers.referer.includes(`${address2}:3004`)) {
      res.header('Access-Control-Allow-Origin', `${address2}:3004`); //recommendation
    } else if (req.headers.referer.includes(`${address3}:3006`)) {
      res.header('Access-Control-Allow-Origin', `${address3}:3006`); //delivery
    } else if (req.headers.referer.includes(`${address1}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address1}:3000`); //my proxy
    } else if (req.headers.referer.includes(`${address2}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address2}:3000`); //nick's proxy
    } else if (req.headers.referer.includes(`${address3}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address3}:3000`); //kate's proxy
    }
  }
  next();
});

//gzip
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set({
    'Content-Encoding': 'gzip',
    'Content-Type': 'application/javascript'
  });
  next();
});


app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/itemPrice/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId.includes('array')) {
    const itemsInArray = itemId.substring(5);
    const itemIds = itemsInArray.split(',');
    const invalidId = false;

    for (var i = 0; i < itemIds.length; i++) {
      if (itemIds[i] < 100 || itemIds[i] > 199) {
        res.status(404).send('Invalid itemId');
        invalidId = true;
        break;
      }
    }
    if (!invalidId) {
      db.getTitleAndPrices(itemIds)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(404).send('error in getTitleAndPrices: ', err);
      })
    }
  } else if (itemId < 100 || itemId > 199) {
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