/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
const connectToMongo = require("./db");
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/public/index.html"));
});

app.use("/password", require("./password/controller/passwordController"));
app.use("/url", require("./urlShortener/controller/urlShortenerController"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

connectToMongo();
