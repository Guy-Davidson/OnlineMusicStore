const express = require('express');

const route = express.Router();

const purchasesController = require('../Controllers/purchasesController')

route.post('/', purchasesController.postPurchase)

module.exports = route;