const express = require('express');

const route = express.Router();

const usersController = require('../Controllers/usersController')

route.get('/', usersController.getUser)

module.exports = route;