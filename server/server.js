const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
require("./schemas/userSchema.js");

mongoose
  .connect(
    "mongodb://ProgrammingBuddies:ProgrammingBuddies1@ds231517.mlab.com:31517/gas",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to db");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
