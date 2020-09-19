// acquiring necessary dependencies
const http = require("https");
const express = require("express");
const router = express.Router();

// acquiring model
const Word = require("../models/Word");

//retriving new word from oxford api and returning it to user
router.get("/:word", async (req, res) => {
  var wordId = req.params.word;
  const strictMatch = "false";

  const options = {
    host: "od-api.oxforddictionaries.com",
    port: "443",
    path: "/api/v2/entries/en-gb/" + wordId + "?strictMatch=" + strictMatch,
    method: "GET",
    headers: {
      app_id: "f0185376",
      app_key: "4dfd7dc9aeac9fdf8866905cd2337fa5",
    },
  };
  var list = [];
  http.get(options, (resp) => {
    let body = "";
    resp.on("data", (d) => {
      body += d;
    });
    resp.on("end", () => {
      list = JSON.parse(body);
      console.log(list.error);
      if (!list.error) {
        const word = new Word({ word: list.results });
        const savedWord = word.save();
        res.json(savedWord);
      } else {
        res.status(500).send({ error: "Something failed!" });
      }
    });
  });
});
module.exports = router;
