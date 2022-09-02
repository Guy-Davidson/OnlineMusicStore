const express = require('express');

const route = express.Router();

const productsController = require('../Controllers/productsController')

route.post('/', productsController.postProducts)

route.post('/product', productsController.postProduct)

route.delete('/', productsController.deleteProduct)

module.exports = route;