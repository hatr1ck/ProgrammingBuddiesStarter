const passport = require("passport");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        // Send to dashboard route, need to link up to client
      res.redirect("/dashboard");
    }
  );

  // Logout route handler
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // check current user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
