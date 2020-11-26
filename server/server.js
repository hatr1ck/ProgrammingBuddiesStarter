const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");
require("./schemas/userSchema.js");
require("./services/passport");

const PORT = 4000;

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

// pass app into authRoutes arrow function
require("./routes/authRoutes")(app);

app.listen(PORT);
