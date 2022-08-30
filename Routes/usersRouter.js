const express = require('express');

const route = express.Router();

const usersController = require('../Controllers/usersController')

route.get('/', usersController.getUser)

route.post('/list', usersController.postUsers)

module.exports = route;