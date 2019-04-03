var db = require("../models/");


//Get Route for SUM to see all TCM's with their SUM identifier/foreign key
//findAll - where foreignkey = SUM_ID


//Post route for SUM to create a new TCM
//create

//Get Route for TCM to see their inventory
//findAll - for TCM ID


//Put Route to add/subtract to specific cookie inventory
//update

//Post route to add an open trade and reduce inventory of TCM_1
//create - TCM_giver = TCM ID of maker of trade

//Get Route to see trades available
//findAll - where TCM_taker = null

//Get Route to see all trades you're involved in
//findAll - where TCM_giver or TCM_taker = their TCM ID

//Put route to claim an open trade and update trade with TCM 2 ID
//update

//Post route to delete completed/cancelled trades
//destroy

//Put route to update TCM 2 numbers after trade confirmation
//update

//Put route to update TCM 1 numbers after trade cancelation
//update

// Defining methods for the bookController
// module.exports = {
  // findAll: function(req, res) {
  //   db.Book.find(req.query)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book.create(req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => dbBook.remove())
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
//   }
// };