import express from "express";
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
