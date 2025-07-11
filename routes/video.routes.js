const express = require("express");
const { getVideos, getVideo } = require("../controllers/video.controller");
const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideo);

module.exports = router;
