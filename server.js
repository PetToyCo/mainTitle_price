const express = require('express');
const path = require('path');
const db = require('./database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));


app.listen(3005, () => {
  console.log('server is listening on port 3005');
});

module.exports = app;