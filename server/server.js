const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const devKeys = require("./config/dev");    // Need to figure out how this will work for collaborating
require("./schemas/userSchema.js");
require("./services/passport");

const PORT = 4000;

// Got warning to add retryWrites property
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: false});

const app = express();

// Set up cookies for tracking googleid
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,           // amount time cookie stays valid befor needing a new one
      keys: [devKeys.cookieKey]                      // Pull from config.keys, need an array
  })
)

// Tell app to use the cookie keys
app.use(passport.initialize());
app.use(passport.session());

// pass app into authRoutes arrow function
require("./routes/authRoutes")(app);

app.listen(PORT);
