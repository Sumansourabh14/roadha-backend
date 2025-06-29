require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const app = express();
const port = process.env.PORT || 3003;

app.use(cors({ origin: process.env.FRONTEND_URI }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
