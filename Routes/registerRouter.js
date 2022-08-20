const express = require('express');

const route = express.Router();

const registerController = require('../Controllers/registerController')

route.post('/', registerController.postRegister)

module.exports = route;