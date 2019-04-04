var db = require("../models");

module.exports = function (app) {

  app.get("/api/tcms", function (req, res) {
    db.TCM.findAll({})
      .then(function (users) {
        res.json(users);
        // console.log(users);
      })
      .catch(err => res.status(422).json(err));
  });


  app.get("/api/tcms/:id", function (req, res) {
    db.TCM.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then(function (users) {
        res.json(users);
        // console.log(users);
      })
      .catch(err => res.status(422).json(err));
  });

  app.post("/api/tcm/login", function (req, res) {

    db.TCM.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      }
    })
      .then(function (users) {
        // console.log(users);
        if (users == null) {
          res.json(users);
        }
        else
        {
          users.password = "";
          res.json(users);
        }
      })
      .catch(err => res.status(422).json(err));
  });
};
