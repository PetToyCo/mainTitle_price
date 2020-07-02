const express = require('express');
const path = require('path');
const db = require('./database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/itemPrice/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.getTitleAndPrice(itemId)
    .then(data => {
      console.log('success getting title and price: ', data);
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log('error in getTitleAndPrice: ', err);
    })
});


app.listen(3005, () => {
  console.log('server is listening on port 3005');
});

module.exports = app;