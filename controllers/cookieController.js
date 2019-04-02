var express = require("express");
var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});


//Get Route for SUM to see all TCM's with their SUM identifier/foreign key
//findAll - where foreignkey = SUM_ID

//Post route for SUM to create a new TCM
//create

//Get Route for TCM to see their inventory
//findAll

//Put Route to add to specific cookie inventory
//update

//Put Route to reduce specific cookie inventory?  This might not be needed as previous could accomplish same thing
//update

//Post route to add an open trade
//create

//Get Route to see trades available
//findAll - where TCM_taker = null

//Get Route to see all trades your involved in
//findAll - where TCM_giver or TCM_taker = their TCM ID

//Put route to update an open trade with TCM 2 ID
//update

//Post route to delete completed/cancelled trades
//destroy

//Put route to update TCM 2 numbers after trade confirmation
//update

//Put route to update TCM 1 numbers after trade cancelation
//update



// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.Cookie.findAll()
    // use promise method to pass the burgers...
    .then(function(dbBurger) {
      console.log(dbBurger);
      // into the main index, updating the page
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
    .then(function(dbBurger) {
      // log the result to our terminal/bash window
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update/:id", function(req, res) {
  // update one of the burgers
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(dbBurger) {
    res.json("/");
  });
});



module.exports = router;