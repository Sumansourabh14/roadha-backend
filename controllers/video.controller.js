const Video = require("../models/Video.model");
const asyncHandler = require("../utils/asyncHandler");

const getVideos = asyncHandler(async (req, res, next) => {
  const videos = await Video.find();

  res.status(200).json({
    success: true,
    data: videos,
  });
});

const getVideo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const video = await Video.findById(id);

  res.status(200).json({
    success: true,
    data: video,
  });
});

module.exports = { getVideos, getVideo };
