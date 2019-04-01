var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
// var passport = require("./config/passport");
const routes = require("./routes");
var db = require("./models/user");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// Add routes, both API and view
app.use(routes);


// Start the API server
// db.sequelize.sync({ force: false }).then(function () {
//     app.listen(PORT, function () {
//       console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//     });
// });

app.listen(PORT, function () {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});