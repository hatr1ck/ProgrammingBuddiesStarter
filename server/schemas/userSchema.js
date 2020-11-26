const mongoose = require("mongoose");

//user schema that fetches dummy data
var scma = mongoose.Schema({
  username: String,
  password: Number,
  email: String,
  dateOfBirth: String,
});

let md = mongoose.model("users", scma);
md.find({}).then((usr) => {
  console.log(usr);
});
