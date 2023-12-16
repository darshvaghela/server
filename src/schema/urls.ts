/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  hashCode: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});
module.exports = mongoose.model("urls", UrlSchema);
