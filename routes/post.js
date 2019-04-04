// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Create an offer...
  app.post("/api/offer", function(req, res) {
    // Update the variables above based on the selected cookie on the form... req.params.cookies is a placeholder
    let cookies = req.params.cookies;
    let amount = req.params.amount;
    // etc etc...
    // Find your current database values, searching for your username...
    // req.params.id is a placeholder, that's YOU THE TRADE MAKER's logged in ID
    db.TCM.findOne({ where: { id: req.params.id } })
      // Then use the info we found to update all the fields appropriately.
      .then(function(offer) {
        // We subtract from each field the current value of the cookies offered
        offer.decrement(cookies, { by: amount });
      })
      // Then makes a new entry into Trade.
      .then(
        // req.params.id is a placeholder, that's YOU THE TRADE MAKER's logged in ID
        // req.params.cookie is a placeholder for cookie chosen
        db.Trade.create({
          tcmID_giver: req.params.id,
          cookie_type: req.params.cookie,
          cookie_amount: req.params.amount
        }).then(function(dbPost) {
          res.json(dbPost);
        })
      );
  });

  // Put route that claims an open trade by updating the update trade with TCM 2 ID
  app.put("/api/claim", function(req, res) {
    // Identify the user when you click a button that says 'Claim Swap'
    // req.params.tradeID is a placeholder for THE TRADE ID
    db.Trade.findOne({ where: { id: req.params.tradeID } })
      .then(function(claim) {
        // Then append that entry's tcmID_taker field with the ID of the user you're logged in as
        // req.params.id is a placeholder for YOU, the clicker
        return claim.update({ tcmID_taker: req.params.id });
      })
      .then(function(result) {
        res.json(result);
      });
  });

  // Add a new Troop Cookie Manager
  app.post("/api/addtcm", function(req, res) {
      // Create a new TCM.
      // All fields are placeholders for like req.body.name or whatever
      db.TCM.create({
        // sumId is a placeholder for the bridging of things from SUM
        //  name: ,
        //  email: ,
        //  password: ,
        //  phone: ,
        //  city: ,
         smores: '0',
         thin_mint: '0' ,
         shortbread: '0' ,
         peanut_butter_patties: '0' ,
         lemonades: '0' ,
         thanks_a_lot: '0' ,
         samoas: '0' ,
         caramel_chocolate_chip: '0' ,
         peanut_butter_sandwich: '0' }
      ).then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Put route that lets you update your cookies inventory
  app.put("/api/add", function(req, res) {
    // These params are placeholders
    let cookies = req.params.cookies;
    let amount = req.params.amount;
    db.TCM.findOne({
      // req.params.id is a placeholder for your logged in ID
      where: { id: req.params.id }
    })
      // Finds all your current amounts of cookies and saves them as variables
      .then(function(updating) {
        // Adds how many you swapped to your current cookie inventory variables
        updating.increment(cookies, { by: amount });
      })
      .then(function(result) {
        res.json(result);
      });
  });

  // Put route that lets you update your cookies inventory
  app.put("/api/update", function(req, res) {
    // These params are placeholders
    let cookies = req.params.cookies;
    let amount = req.params.amount;
    db.TCM.findOne({
      // req.params.id is a placeholder for your logged in ID
      where: { id: req.params.id }
    })
      // Finds all your current amounts of cookies and saves them as variables
      .then(function(updating) {
        // Adds how many you swapped to your current cookie inventory variables
        updating.increment(cookies, { by: amount });
      })
      .then(function(result) {
        res.json(result);
      })
      .then(
        // where this trade ID is from the button
        db.Trade.destroy({where: { id: req.params.tradeID }})
      )
  });
};
