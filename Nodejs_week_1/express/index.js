const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>INDEX PAGE</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT PAGE</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT PAGE<h1>");
});

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404 NOT FOUND<h1>");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
