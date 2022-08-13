const express = require('express');

const route = express.Router();

const productsController = require('../Controllers/productsController')

route.get('/', productsController.getProducts)

// route.post('/', recentsController.postRecents)

module.exports = route;