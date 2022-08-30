const express = require('express');

const route = express.Router();

const logoutController = require('../Controllers/logoutController')

route.post('/', logoutController.postLogout)

module.exports = route;