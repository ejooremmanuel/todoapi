const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth/auth.routes");
const userRoutes = require("./routes/user/user.routes");
const calendarRoutes = require("./routes/calendar.routes");
const cors = require("cors");
const app = express();

mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("database connected");
  })
  .catch(({ message }) => {
    console.log("database error: " + message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/", calendarRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found!" });
  next();
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server listening on port:: ", port);
});
