'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conexão ao banco
mongoose.connect('mongodb://wilker:140396@localhost:27017/admin');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Não precisa especificar o PUT e o DELETE;
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;