const express = require("express"),
	router = express.Router(),
	mainController = require("../app/controllers/main.controller");

module.exports = router;

// App Routes
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/sample_post", mainController.sample_post);
router.get("/contact", mainController.contact);
