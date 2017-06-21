'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 2000;

app.use(express.static('./public'));
app.get('/'), function(req, res) {
  res.sendFile('./index.html');
};

app.listen(PORT, function() {
  console.log('It\'s working. Hoorayyyyyy!!!');
});
