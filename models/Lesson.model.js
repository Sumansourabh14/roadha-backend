const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    serial_no: {
      type: Number,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    youtube_link: {
      type: String,
      default: "",
    },
    google_slide_link: {
      type: String,
      default: "",
    },
    reference: [
      {
        type: {
          type: String,
          enum: ["article", "youtube", "x", "other"],
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    importance: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "medium",
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
