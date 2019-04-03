const db = require("../models");

// Defining methods for the TradesController
module.exports = {
  findAll: function(req, res) {
    db.trades.find(req.query)
      .then(dbTrades => res.json(dbTrades))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.trades.findById(req.params.id)
      .then(dbTrades => res.json(dbTrades))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.trades.create(req.body)
      .then(dbTrades => res.json(dbTrades))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.trades.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTrades => res.json(dbTrades))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.trades.findById(req.params.id)
      .then(dbTrades => dbTrades.remove())
      .then(dbTrades => res.json(dbTrades))
      .catch(err => res.status(422).json(err));
  }
};
