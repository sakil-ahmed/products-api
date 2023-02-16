const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/minimog/data.js");
});

app.listen(3000);
