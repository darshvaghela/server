import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello welcome to D-Coding!");
});

app.use("/password", require("./password/controller/passwordController"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
