const express = require("express");
const path = require("path");

const app = express();
const pubPath = path.join(__dirname, "public");

app.set('view engine','ejs');


app.get("", (_, res) => {
  res.sendFile(`${pubPath}/about.html`);
});


app.get("/profile", (_, res) => {

    const user = {
        name:"Navdeep Bhatt",age:20    }
  res.render('profile',{user});
});


app.get("/help", (_, res) => {
  res.sendFile(`${pubPath}/help.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${pubPath}/404.html`);
});

app.listen(5000);
