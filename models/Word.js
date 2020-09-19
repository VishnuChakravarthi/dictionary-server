const mongoose = require("mongoose");

// Schema for data in database
const WordSchema = new mongoose.Schema({
  word: {
    type: [],
  },
});

module.exports = mongoose.model("Word", WordSchema);
