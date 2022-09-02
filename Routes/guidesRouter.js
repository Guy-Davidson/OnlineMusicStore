const express = require("express");

const route = express.Router();

const guidesController = require("../Controllers/guidesController");

route.post("/", guidesController.postGuides);
route.get("/:fileName", guidesController.getGuideThumbnail);

module.exports = route;
