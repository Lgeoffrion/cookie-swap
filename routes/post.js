// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/offer", function(req, res) {
    db.TCM.findOne({ where: { id: 1 } })
      .then(function(offer) {
        return offer.update(
          {
            smores: req.cookies.smores?
              parseFloat(offer.smores) - req.cookies.smores
              : parseFloat(offer.smores)
          },
          {
            thin_mints: req.cookies.thin_mints?
               parseFloat(offer.thin_mints) - req.cookies.thin_mints
              : parseFloat(offer.thin_mints)
          },
          {
            shortbread: req.cookies.shortbread?
               parseFloat(offer.shortbread) - req.cookies.shortbread
              : parseFloat(offer.shortbread)
          },
          {
            peanut_butter_patties: req.cookies.peanut_butter_patties?
               parseFloat(offer.peanut_butter_patties) -
                req.cookies.peanut_butter_patties
              : parseFloat(offer.peanut_butter_patties)
          },
          {
            lemonades: req.cookies.lemonades?
               parseFloat(offer.lemonades) - req.cookies.lemonades
              : parseFloat(offer.lemonades)
          },
          {
            thanksalot: req.cookies.thanksalot?
               parseFloat(offer.thanksalot) - req.cookies.thanksalot
              : parseFloat(offer.thanksalot)
          },
          {
            samoas: req.cookies.samoas?
               parseFloat(offer.samoas) - req.cookies.samoas
              : parseFloat(offer.samoas)
          },
          {
            caramel_chocolate_chip: req.cookies.caramel_chocolate_chip?
               parseFloat(offer.caramel_chocolate_chip) -
                req.cookies.caramel_chocolate_chip
              : parseFloat(offer.caramel_chocolate_chip)
          },
          {
            peanut_butter_sandwich: req.cookies.peanut_butter_sandwich?
               parseFloat(offer.peanut_butter_sandwich) -
                req.cookies.peanut_butter_sandwich
              : parseFloat(offer.peanut_butter_sandwich)
          }
        );
      })
      .then(
        db.Trade.create(
          { tcmID_giver: "2525" },
          { cookie_type: "thin_mints" },
          { cookie_amount: 50 }
        ).then(function(dbPost) {
          res.json(dbPost);
        })
      );
  });

  // Put route that claims an open trade by updating the update trade with TCM 2 ID
  app.put("/api/claim", function(req, res) {
    // Identify the user when you click a button that says 'Claim Swap'
    // 1 is a placeholder
    db.Trade.findOne({ where: { id: 1 } })
      .then(function(claim) {
        // Then append that entry's tcmID_taker field with the ID of the user you're logged in as
        // 42 is a placeholder
        return claim.update({ tcmID_taker: 42 });
      })
      .then(function(result) {
        console.log("results: ", result);
      });
  });

  // Add a new Troop Cookie Manager
  app.post("/api/addtcm", function(req, res) {
    // Create a new TCM.
    // All fields are placeholders for like req.body.name or whatever
    db.TCM.create(
      // sumId is a placeholder for the bridging of things from SUM
      { sumId: "42" },
      { name: "Bowie Sessions" },
      { email: "test@test.com" },
      { password: "12345" },
      { phone: "123-4567" },
      { city: "Shakopee" },
      { smores: 0 },
      { thin_mints: 0 },
      { shortbread: 0 },
      { peanut_butter_patties: 0 },
      { lemonades: 0 },
      { thanksalot: 0 },
      { samoas: 0 },
      { caramel_chocolate_chip: 0 },
      { peanut_butter_sandwich: 0 }
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Put route that lets you update your cookies inventory
  // let curSm, curTm, curSb, curPbp, curLe, curTh, curSa, curCcc, curPbs;
  // app.put("/api/add", function(req,res) {
  //   db.TCM.findAll({
  //       where: { id: req.cookies.id }
  //     })
  //     .then(function(dbPost) {
  //       curSm = dbPost.smores;
  //       curTm = dbPost.thin_mints;
  //       curSb = dbPost.shortbread;
  //       curPbp = dbPost.peanut_butter_patties;
  //       curLe = dbPost.lemonades;
  //       curTh = dbPost.thanksalot;
  //       curSa = dbPost.samoas;
  //       curCcc = dbPost.caramel_chocolate_chip;
  //       curPbs = dbPost.peanut_butter_sandwich;
  //     });
  //   })
  //   .then(
  //     db.TCM.update(
  //       { smores: req.cookies.smores + curSm },
  //       { thin_mints: req.cookies.thin_mints + curTm },
  //       { shortbread: req.cookies.shortbread + curSb },
  //       { peanut_butter_patties: req.cookies.peanut_butter_patties + curPbp },
  //       { lemonades: req.cookies.lemonades + curLe },
  //       { thanksalot: req.cookies.thanksalot + curTh },
  //       { samoas: req.cookies.samoas + curSa },
  //       { caramel_chocolate_chip: req.cookies.caramel_chocolate_chip + curCcc },
  //       { peanut_butter_sandwich: req.cookies.smores + curPbs },
  //       {
  //        where: { id: req.cookies.id }
  //       }
  //     )
  //   )
  // }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });

  // Put route that updates an inventory based on a trade completion, then destroys the trade.
  // app.put("/api/update", function(req, res) {
  //     db.TCM.findAll({
  //       where: { id: req.cookies.id }
  //     })
  //     .then(function(dbPost) {
  //       curSm = dbPost.smores;
  //       curTm = dbPost.thin_mints;
  //       curSb = dbPost.shortbread;
  //       curPbp = dbPost.peanut_butter_patties;
  //       curLe = dbPost.lemonades;
  //       curTh = dbPost.thanksalot;
  //       curSa = dbPost.samoas;
  //       curCcc = dbPost.caramel_chocolate_chip;
  //       curPbs = dbPost.peanut_butter_sandwich;
  //     });
  //   })
  //   .then(
  //     db.TCM.update(
  //       { smores: req.cookies.smores + curSm },
  //       { thin_mints: req.cookies.thin_mints + curTm },
  //       { shortbread: req.cookies.shortbread + curSb },
  //       { peanut_butter_patties: req.cookies.peanut_butter_patties + curPbp },
  //       { lemonades: req.cookies.lemonades + curLe },
  //       { thanksalot: req.cookies.thanksalot + curTh },
  //       { samoas: req.cookies.samoas + curSa },
  //       { caramel_chocolate_chip: req.cookies.caramel_chocolate_chip + curCcc },
  //       { peanut_butter_sandwich: req.cookies.smores + curPbs },
  //       {
  //        where: { id: req.cookies.id }
  //       }
  //     )
  //   )
  //   .then(
  //     db.trades.destroy({
  //       where: { id: req.cookies.tradeID }
  //     })
  //   )
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
};
