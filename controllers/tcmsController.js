const db = require("../models");

// Defining methods for the TcmsController
module.exports = {
//   findAll: function(req, res) {
//     db.tcms.find(req.query)
//       .then(dbTcms => res.json(dbTcms))
//       .catch(err => res.status(422).json(err));
//   },
  findById: function(req, res) {
    db.tcms.findById(req.params.id)
      .then(dbTcms => res.json(dbTcms))
      console.log(dbTcms)
      .catch(err => res.status(422).json(err));
  }
//   create: function(req, res) {
//     db.tcms.create(req.body)
//       .then(dbTcms => res.json(dbTcms))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.tcms.findOneAndUpdate({ id: req.params.id }, req.body)
//       .then(dbTcms => res.json(dbTcms))
//       .catch(err => res.status(422).json(err));
//   },
};

// Dependencies
// =============================================================
// Requiring our models
// var db = require("../../models");
// //Requiring passport
// var passport = require("../../config/passport");
// var UserInfo;

// Routes
// =============================================================

// module.exports = function(app) {


// // Using the Passport Authentication process, check if the user is in our database
// app.post("/api/login", passport.authenticate("local"), function (req, res) {
//   UserInfo = { tcm: req.tcm }
//   res.json({ success: (req.tcm ? "Yes" : "No"), tcm: req.tcm });
// });


// app.get("/api/tcmInventory", function (req, res){
//     db.tcm.FindAll({
// where:{
//     id: UserInfo.tcm.id
// }
//     })
//     .then(function (tcmInventory){
//         res.json(tcmInventory);
//         console.log(tcmInventory)
//     });
// });

// };
