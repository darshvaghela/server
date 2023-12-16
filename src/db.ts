// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://darshvaghela253:I7yWN8kmFBMsN4VZ@cluster0.10joklg.mongodb.net/UrlMapping?retryWrites=true&w=majority";

  

export const connectToMongo = () => {
  mongoose.connect(mongoURI)
  console.log("mongo connected successfully ")
};

module.exports = connectToMongo;
