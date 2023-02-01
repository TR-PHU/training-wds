require("dotenv").config();
const express = require("express");
const port = 5000;

const { connectDb } = require("./src/models");
const router = require("./src");

const app = express();

connectDb();

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
