const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

router.get("/", async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
