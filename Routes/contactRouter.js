const express = require('express');

const route = express.Router();

const contactController = require('../Controllers/contactController')

route.post('/send', contactController.postContact)

module.exports = route;