const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const postsRoute = require("./route/addToDb");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.get("/", (req, res) => {
  res.send("we are on home");
});

app.listen(8000);
