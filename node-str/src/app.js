'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Não precisa especificar o PUT e o DELETE;
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;