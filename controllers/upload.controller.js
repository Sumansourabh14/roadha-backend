const Video = require("../models/Video.model");
const asyncHandler = require("../utils/asyncHandler");

const uploadVideo = asyncHandler(async (req, res, next) => {
  const { videoUrl, thumbnail, title, description, duration, views, isPublic } =
    req.body;

  const newVideo = await Video.create({
    videoUrl,
    thumbnail,
    title,
    description,
    duration,
    views,
    isPublic,
  });

  res.status(201).json({
    success: true,
    message: "Video uploaded!",
    data: newVideo._id,
  });
});

module.exports = { uploadVideo };
