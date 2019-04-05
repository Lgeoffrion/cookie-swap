var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const routes = require("./routes");
var db = require("./models");

var app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/tcms.js")(app);

require("./routes/post.js")(app);
require("./routes/sum.js")(app);

require("./routes/login.js")(app);

<<<<<<< HEAD
<<<<<<< HEAD
// Add routes, both API and view
app.use(routes);

=======
>>>>>>> 2d5517286f8a4b1eaec24e8f17ae5f69396306c6
>>>>>>> b43c130a67e970d6bb228c2ecb1a4a2a97d3ce9a

db.sequelize.sync().then(function() {
=======
// Add routes, both API and view
app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
>>>>>>> 27a0c7d4126c3ab7e8f56ac36af83bd4636813e9
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});