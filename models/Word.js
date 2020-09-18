const mongoose = require("mongoose");

const WordSchema = mongoose.Schema({
  word: {
    type: [],
  },
});

module.exports = mongoose.model("Word", WordSchema);
