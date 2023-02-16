const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/minimog/products", (req, res) => {
  res.sendFile(__dirname + "/minimog/db.json");
});
app.get("/voxo/products", (req, res) => {
  res.sendFile(__dirname + "/voxo/db.json");
});

app.listen(3000);
