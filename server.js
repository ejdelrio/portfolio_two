'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 2000;

app.use(express.static('.'));
app.get('/'), (req, res)=>res.sendFile('.index.html');
