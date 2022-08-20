const express = require('express');

const route = express.Router();

const loginController = require('../Controllers/loginController')

route.post('/', loginController.postLogin)

module.exports = route;