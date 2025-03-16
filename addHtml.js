const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("<h1>This Is Heading 1 </h1>")
  res.send("Welcome "+req.query.name);
});

app.listen(5000);