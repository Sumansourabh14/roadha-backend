const Lesson = require("../models/Lesson.model");
const asyncHandler = require("../utils/asyncHandler");

const getLessons = asyncHandler(async (req, res, next) => {
  const lessons = await Lesson.find();

  res.status(200).json({
    success: true,
    data: lessons,
  });
});

module.exports = { getLessons };
