const express = require('express');

const route = express.Router();

const cartsController = require('../Controllers/cartsController')

route.get('/', cartsController.getCart)

route.patch('/', cartsController.patchCart)

module.exports = route;