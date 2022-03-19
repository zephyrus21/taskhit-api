require("dotenv").config();

const express = require("express");
const connectWithDb = require("./config/db");
const app = express();

const PORT = 4000;

connectWithDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
