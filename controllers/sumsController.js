const db = require("../models");

// Defining methods for the SumsController
module.exports = {
  findAll: function(req, res) {
    db.sums.find(req.query)
      .then(dbSums => res.json(dbSums))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.sums.findById(req.params.id)
      .then(dbSums => res.json(dbSums))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.sums.create(req.body)
      .then(dbSums => res.json(dbSums))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.sums.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbSums => res.json(dbSums))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.sums.findById(req.params.id)
      .then(dbSums => dbSums.remove())
      .then(dbSums => res.json(dbSums))
      .catch(err => res.status(422).json(err));
  }
};
