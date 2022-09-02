const express = require("express");

const route = express.Router();

const tunerController = require("../Controllers/tunerContoller");

route.get("/:fileName", tunerController.getStringAudio);

module.exports = route;
