const express = require("express");

const route = express.Router();

const chordsController = require("../Controllers/chordsController");

route.get("/page=:pageNum", chordsController.getChords);
route.get("/:fileName", chordsController.getSingleChords);

module.exports = route;
