const express = require('express');

const route = express.Router();

const addToCartController = require('../Controllers/addToCartController')

route.post('/', addToCartController.postAddToCart)

route.get('/user', addToCartController.getUserAddToCart)

module.exports = route;