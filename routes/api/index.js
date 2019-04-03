const path = require("path");
const router = require("express").Router();
const sumsRoutes = require("./sums");
const tcmsRoutes = require("./tcms");
const tradesRoutes = require("./trades");

// SUMs routes
router.use("/sums", sumsRoutes);

// TCMs Routes
router.use("/tcms", tcmsRoutes);

// Trades Routes
router.use("/trades", tradesRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;