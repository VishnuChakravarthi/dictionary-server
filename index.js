//acquiring necessary lib
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//acquiring dotenv to hide credentials
require("dotenv/config");

//Setting up route
const wordsRoute = require("./route/fetch");
const addRoute = require("./route/addWord");

//starting express
const app = express();

//Implementing middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/words", wordsRoute);
app.use("/add", addRoute);

//Connecting database through mongoose
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.listen(8000);
