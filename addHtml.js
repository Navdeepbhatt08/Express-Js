const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(`<h1>This Is Heading 1 </h1>  <a href ="/about">About Us </a> <br><br>
    <a href ="/help"> Help page </a>  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <a href ="/">Home Page </a> <br><br><br><br>
    <input type = "text" placeholder = "username" value = "${req.query.name}"/>
    <button> Click Me </button>
    `);
});

app.get("/help", (req, res) => {
  res.send(
   `
    <a href ="/">Home Page </a> <br><br><br><br>
    {
    name: "navdeep bhatt",
    age: 20,
    contact: "844536367x",
  }`);
});

app.listen(5000);
