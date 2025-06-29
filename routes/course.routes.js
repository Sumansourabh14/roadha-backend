const express = require("express");
const { getLessons } = require("../controllers/course.controller");
const router = express.Router();

router.get("/lessons", getLessons);

module.exports = router;
