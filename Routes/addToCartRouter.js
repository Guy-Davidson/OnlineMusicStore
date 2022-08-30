const express = require('express');

const route = express.Router();

const addToCartController = require('../Controllers/addToCartController')

route.post('/', addToCartController.postAddToCart)

module.exports = route;