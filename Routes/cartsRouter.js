const express = require('express');

const route = express.Router();

const cartsController = require('../Controllers/cartsController')

route.get('/', cartsController.getCart)

module.exports = route;