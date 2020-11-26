const passport = require("passport");

module.exports = (app) => {
    app.get(
        "/",
        (req, res) => {
            res.send("Hello World!");
        }
    )

    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    )

    app.get(
        "/auth/google/callback",
        (req, res) => {
            res.send("Authorised by Google");
        }
    )
}