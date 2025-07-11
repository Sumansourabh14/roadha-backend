const express = require("express");
const { uploadVideo } = require("../controllers/upload.controller");
const router = express.Router();

router.post("/video", uploadVideo);

module.exports = router;
