const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const devKeys = require("../config/dev");
const mongoose = require("mongoose");


const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is the id from Mongo record (not the googleId). Better if have multiple authentication sources (FB, apple etc)
});

// Turns id (cookie token) back into a model instance for Mongo.  Need to search DB for a record with this id:
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});




passport.use(
    new GoogleStrategy(
        {
            clientID: devKeys.googleClientID,
            clientSecret: devKeys.googleSecretKey,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            // Check if collection has any matching records
            const existingUser = await User.findOne({ googleId: profile.id }); 

            // We have an existing record:
            if (existingUser) {
              done(null, existingUser); 
            } else {
              // No existing record of user, create new one:
              const user = await new User({ googleId: profile.id }).save();
              done(null, user); 
            }
        }
));