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
    let cookies = req.body.cookie;
    let amount = req.body.value;
    let id = req.body.userid;
    // etc etc...
    // Find your current database values, searching for your username...
    // req.params.id is a placeholder, that's YOU THE TRADE MAKER's logged in ID
    db.TCM.findOne({ where: { id: id } })
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
          tcmID_giver: id,
          cookie_type: cookies,
          cookie_amount: amount
        }).then(function(dbPost) {
          res.json(dbPost);
        })
      );
  });

  // Put route that claims an open trade by updating the update trade with TCM 2 ID
  app.post("/api/claim", function(req, res) {
    // Identify the user when you click a button that says 'Claim Swap'
    // Then append that entry's tcmID_taker field with the ID of the user you're logged in as
    db.Trade.findOne({where: {id: req.body.id}})
    .then(function(claim) {
      return claim.update({tcmID_taker: req.body.userID})
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  })

  // Add a new Troop Cookie Manager
  app.post("/api/addtcm", function(req, res) {
    // Create a new TCM.
    // All fields are placeholders for like req.body.name or whatever
    db.TCM.create({
      // sumId is a placeholder for the bridging of things from SUM
      name: req.body.name,
      troop: req.body.troop,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      city: req.body.city,
      SUMId:req.body.userid,
      smores: "0",
      thin_mint: "0",
      shortbread: "0",
      peanut_butter_patties: "0",
      lemonades: "0",
      thanks_a_lot: "0",
      samoas: "0",
      caramel_chocolate_chip: "0",
      peanut_butter_sandwich: "0"
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Put route that lets you update your cookies inventory
  app.put("/api/add", function(req, res) {
    // These params are placeholders
    let cookies = req.body.cookie;
    let amount = req.body.value;
    let id = req.body.userid;
    
    db.TCM.findOne({
      // req.params.id is a placeholder for your logged in ID
      where: { id: id }
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
    app.put("/api/sub", function(req, res) {
      // These params are placeholders
      let cookies = req.body.cookie;
      let amount = req.body.value;
      let id = req.body.userid;
      
      db.TCM.findOne({
        // req.params.id is a placeholder for your logged in ID
        where: { id: id }
      })
        // Finds all your current amounts of cookies and saves them as variables
        .then(function(updating) {
          // Adds how many you swapped to your current cookie inventory variables
          updating.decrement(cookies, { by: amount });
        })
        .then(function(result) {
          res.json(result);
        });
    });

  // Put route that lets you update your cookies inventory and destroy the trade after Completion
  app.put("/api/complete", function(req, res) {
    // These params are placeholders
    let cookies = req.params.cookies;
    let amount = req.params.amount;
    db.TCM.findOne({
      // req.params.id is a placeholder for the tcmID_taker's TCM table id
      where: { id: req.params.giverID }
    })
      // Finds all your current amounts of cookies and saves them as variables
      .then(function(updating) {
        // Adds how many you swapped to your current cookie inventory variables
        updating.increment(cookies, { by: amount });
      })
      .then(
        // where this trade ID is from the button
        db.Trade.destroy({ where: { id: req.params.tradeID } })
      );
  });

  // Put route that lets you update your cookies inventory and destroy the trade after Canceling
  app.put("/api/cancel", function(req, res) {
    // These params are placeholders
    let cookies = req.params.cookies;
    let amount = req.params.amount;
    db.TCM.findOne({
      // req.params.id is a placeholder for the tcmID_giver's TCM table id
      where: { id: req.params.takerID }
    })
      // Finds all your current amounts of cookies and saves them as variables
      .then(function(updating) {
        // Adds how many you swapped to your current cookie inventory variables
        updating.increment(cookies, { by: amount });
      })
      .then(
        // where this trade ID is from the button
        db.Trade.destroy({ where: { id: req.params.tradeID } })
      );
  });
};
