const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const devKeys = require("../config/dev");
const mongoose = require("mongoose");








passport.use(
    new GoogleStrategy(
        {
            clientID: devKeys.googleClientID,
            clientSecret: devKeys.googleSecretKey,
            callbackURL: "/auth/google/callback"
        },
        (token) => {
            console.log(token);
        }
));