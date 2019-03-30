const path = require("path");
const router = require("express").Router();
var passport = require("../config/passport");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/login", passport.authenticate("local"), function (req, res) {

  UserInfo = { user: req.user }
  res.json({ success: (req.user ? "Yes" : "No"), user: req.user });

});

module.exports = router;
