const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log('Data Sent By Postman = ',req.query.name)
  res.send("Welcome "+req.query.name);
});

app.get("/about", (req, res) => {
  res.send("Hello ,This is About Page");
});
app.get("/help", (req, res) => {
  res.send("Hello ,This is a help Page ");
});

app.listen(5000);
