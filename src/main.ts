import Calc from "./calc";
import express from "express";

const app = express();
const port = 3000;

const c = new Calc();
app.get("/", (req, res) => {
  res.send("Hello World!" + c.add(1, 2));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
