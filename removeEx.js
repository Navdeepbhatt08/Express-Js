const express = require("express");
const path = require("path");

const app = express();
const pubPath = path.join(__dirname, "public");

app.get("", (_, res) => {
res.sendFile(`${pubPath}/about.html`)
});
app.get("/help", (_, res) => {
res.sendFile(`${pubPath}/help.html`)
});


app.listen(5000);
