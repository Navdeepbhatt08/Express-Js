const { escapeXML } = require("ejs");
const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide age");
  } 
  
  else if(req.query.age<18){
    res.send("Can't access this page !!");
  }
  
  else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send(`   <style> *{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        } </style>
         <h2>Welcome to home Page<h2>`);
});

app.get("/users", (req, res) => {
  res.send(`
        <style> *{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}
        </style>
        <h1>Welcome , Users to our page</h1>    `);
});

app.listen(5000);
