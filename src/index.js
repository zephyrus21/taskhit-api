require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectWithDb = require("./config/db");
const { task } = require("./routes/task");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

connectWithDb();

app.use(task);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Post req");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
