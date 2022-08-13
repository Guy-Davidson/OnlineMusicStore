const express = require('express');

const route = express.Router();

const productsController = require('../Controllers/productsController')

route.post('/', productsController.postProducts)

// route.post('/', recentsController.postRecents)

module.exports = route;