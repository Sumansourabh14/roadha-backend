require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");
const app = express();
const port = process.env.PORT || 3003;
const courseRoutes = require("./routes/course.routes");
const videoRoutes = require("./routes/video.routes");
const uploadRoutes = require("./routes/upload.routes");
const errorHandler = require("./utils/errorHandler");

app.use(cors({ origin: process.env.FRONTEND_URI, credentials: true }));

app.use(express.json({ limit: "16kb" })); // handle JSON
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // handle url having '+' and '%20' terms
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/videos", videoRoutes);

app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
