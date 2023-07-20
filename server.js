require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const controllers = require("./api/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});
