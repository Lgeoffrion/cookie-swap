   
// Requires
   var db = require("../models");
   const Sequelize = require('sequelize');
   const Op = Sequelize.Op;
   
  //  Export everything
   module.exports = function (app) {
   

    //See all SUMs
    app.get("/api/SUM/", function (req, res) {
      db.SUM.findAll({})
      .then(function (users) {
        res.json(users);
          console.log(users);
        })
        .catch(err => res.status(422).json(err));
      });

   //See All User Trades that are currently open
   app.get("/api/tradesInProgress", function (req, res) {
    db.Trade.findAll({
  where: {
    tcmID_taker:  {
      [Op.ne]: null,
    }
  }
   })
    .then(function (users) {
      res.json(users);
        console.log(users);
      })
      .catch(err => res.status(422).json(err));
    });


  };