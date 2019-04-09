// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var sendEmail = require("../send-email");

// Routes
// =============================================================
module.exports = function(app) {
  // setting variables to email
  var eAddress = "";
  var eSubject = "";
  var eBody = "";
  var troop1 = "";
  var troop2 = "";
  var SUMemail = "";
  // Create an offer...
  app.post("/api/offer", function(req, res) {
    // 'Global' variables for Offer, 
      // saving the kind of cookies and the amount of cookies offered
      // and the id of the offerer.
    let cookies = req.body.cookie;
    let amount = req.body.value;
    let id = req.body.userid;
    // Find your current database values, searching for your username.
    db.TCM.findOne({ where: { id: id } })
      // Then use the info we found to update all the fields appropriately.
      .then(function(offer) {
        // We subtract from each field the current value of the cookies offered
        offer.decrement(cookies, { by: amount });
      })
      // Then makes a new entry into Trade.
      .then(
        db.Trade.create({
          tcmID_giver: id,
          cookie_type: cookies,
          cookie_amount: amount
        }).then(function(dbPost) {
          res.json(dbPost);
        })
      );
  });

  // Put route that claims an open trade by updating the update trade with claiming TCM's ID
  app.post("/api/claim", function(req, res) {
    // Find the user that has available cookies to get their email address
    // db.TCM.findOne({where: {id: req.body.tcmID_giver}})
    // .then(function(user1){
    //   troop1 = user1.email;
    //     // Find the email of the current user
    //   db.TCM.findOne({where: {id: req.body.userID}})
    // .then(function(user2){
    // troop2 = user2.email;

    // Setting the email options and send out email when a new TCM is created
    // eAddress = troop1;
    // eSubject = troop2 + " wants your cookies!";
    // eBody = troop2 +" wants your "+ req.body.cookie_type+" cookies."+
    //         "\nPlease email " + troop2 + " to confirm and set up swap time and location." +
    //         "\nThank you,"+
    //         "\nGSCookieSwap";
    // console.log(eAddress);
    // console.log(eSubject);
    // console.log(eBody);

    // sendEmail(eAddress,eSubject,eBody);
    // });
    // });
    // Find the email of the current user
    //   db.TCM.findOne({where: {id: req.body.userID}})
    //   .then(function(user2){
    //   troop2 = user2.email;
    // });

    // Identify the user when you click a button that says 'Claim Swap'
    db.Trade.findOne({ where: { id: req.body.id } })
      .then(function(claim) {
      // Then append that entry's tcmID_taker field with the ID of the user you're logged in as
        return claim.update({ tcmID_taker: req.body.userID });
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Add a new Troop Cookie Manager
  app.post("/api/addtcm", function(req, res) {
    // Setting the email options and send out email when a new TCM is created
    eAddress = req.body.email;
    eSubject = "Cookie Swap Account Created";
    eBody =
      "A Cookie Swap account has been created for your troop." +
      "\nUsername: " +
      eAddress +
      "\nPassword: temporary" +
      "\nPlease go in and update your password." +
      "\nThank you," +
      "\nGSCookieSwap";
    sendEmail(eAddress, eSubject, eBody);

    // Create a new TCM.
    alert("creating new TCM named", req.body.name);
    db.TCM.create({
      name: req.body.name,
      troop: req.body.troop,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      city: req.body.city,
      SUMId: req.body.userid,
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
    // 'Global' variables saving cookies, amount, and your ID.
    let cookies = req.body.cookie;
    let amount = req.body.value;
    let id = req.body.userid;

    // Find your entry on the TCM table
    db.TCM.findOne({
      // req.params.id is a placeholder for your logged in ID
      where: { id: id }
    })
      .then(function(updating) {
        // Adds however many cookies you said of the cookie type you specified
        updating.increment(cookies, { by: amount });
      })
      .then(function(result) {
        res.json(result);
      });
  });

  // Put route that lets you update your cookies inventory
  app.put("/api/sub", function(req, res) {
    // 'Global' variables for cookies, amount, and ID
    let cookies = req.body.cookie;
    let amount = req.body.value;
    let id = req.body.userid;

    db.TCM.findOne({
      where: { id: id }
    })
      .then(function(updating) {
        // Deletes how many cookies you said of the cookie type you specified
        updating.decrement(cookies, { by: amount });
      })
      .then(function(result) {
        res.json(result);
      });
  });

  // Put route that lets you update your cookies inventory and destroy the trade after Completion
  app.put("/api/complete", function(req, res) {
    // Setting the email options and send out email when a trade is complete
    // troop1 = req.body.email;
    // troop2 = "" // current user email from local storage
    // SUMemail = "";
    // eAddress = troop1+"," + troop2+","+SUMemail;
    // eSubject = "Cookie Swap completed";
    // eBody = `The cookie swap between ` + troop1 + ` and ` + troop2 + ` is completed.
    //         \nPlease update your transfer in the ABC Cookie system within 24 hours.
    //         Thank you,
    //         GSCookieSwap`;
    // sendEmail(eAddress,eSubject,eBody);

    // Defining some global variables to identify the trade variable, the ID of the cookie taker
      // the cookies and the amount of the cookies
    let trade = req.body[0];
    let taker = parseFloat(req.body[2]) + 1;
    let cookies, amount;

    // Find the ID of the trade itself...
    db.Trade.findOne({
      where: { id: trade }
    })
    // Redefine the cookies.
      .then(function(redefine) {
        cookies = redefine.dataValues.cookie_type;
        amount = redefine.dataValues.cookie_amount;
      })
      // Then find the recipient's ID in the TCM
      .then(
        db.TCM.findOne({
          where: { id: taker }
          // And increment the cookies by the amount and type of cookies of the trade.
        }).then(function(updating) {
          updating.increment(cookies, { by: amount });
          // Then destroy the trade.
          db.Trade.destroy({ where: { id: trade } });
        })
      );
  });

  // Put route that lets you update your cookies inventory and destroy the trade after Canceling
  app.put("/api/cancel", function(req, res) {
    // Define 'global' variables for the trade's ID, the giver's ID, cookies and their amount.
    let trade = req.body[0];
    let giver = parseFloat(req.body[1]) + 1;
    let cookies, amount;

    // Find the trade by the trade ID
    db.Trade.findOne({
      where: { id: trade }
    })
    // Redefine cookies and amount
      .then(function(redefine) {
        cookies = redefine.dataValues.cookie_type;
        amount = redefine.dataValues.cookie_amount;
      })
    // Then find the TCM table by the ID of the cookie giver.
      .then(
        db.TCM.findOne({
          where: { id: giver }
      // Increments the cookies by their cookie type by the amount of the traded cookies
        }).then(function(updating) {
          updating.increment(cookies, { by: amount });
        // Then destroys the trades.
          db.Trade.destroy({ where: { id: trade } });
        })
      );

    // sends out an email when a swap is cancelled
    // troop1 = req.body.email;
    // troop2 = "" // email from local storage
    // eAddress = troop1+"," + troop2;

    // eSubject = "Cookie Swap completed";
    // eBody = `The cookie swap between ` + troop1 + ` and ` + troop2 + ` has been cancelled.
    //         \nThank you,
    //         GSCookieSwap`;
    // sendEmail(eAddress,eSubject,eBody);
  });
};
