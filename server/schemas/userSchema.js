const mongoose = require("mongoose");

// user schema that fetches dummy data.
// This Schema may need cleaning up
const scma = mongoose.Schema({
  googleId: String,
  username: String,
  password: Number,
  email: String,
  dateOfBirth: String,
});

mongoose.model("users", scma);
