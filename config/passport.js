var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// authenticate the troop cookie manager email and password
passport.use('tcm-user', new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function (email, password, done) {
    // When a user tries to sign in this code runs
    db.TCM.findOne({
      where: {
        email: email
      }
    }).then(function (dbUser) {
      // If there's no user with the given email
      // console.log("dbUser",dbUser);
      if (!dbUser) {
        console.log("dbUser",dbUser);
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // console.log("dbUser",dbUser);
      // If none of the above, return the user
      return done(null, dbUser);
    });//.catch(err => res.status(422).json(err));;
  }
));
// authenticate the service unit manager email and password
passport.use('sum-user', new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function (email, password, done) {
      // When a user tries to sign in this code runs
      db.SUM.findOne({
        where: {
          email: email
        }
      }).then(function (dbUser) {
        // If there's no user with the given email
        // console.log("dbUser",dbUser);
        if (!dbUser) {
          console.log("dbUser",dbUser);
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // console.log("dbUser",dbUser);
        // If none of the above, return the user
        return done(null, dbUser);
      });//.catch(err => res.status(422).json(err));;
    }
  ));
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
