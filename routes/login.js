var db = require("../models");
var passport = require("../config/passport");
var UserInfo;

module.exports = function (app) {
// Use the Passsport authentication for checking Login Access
    app.post("/api/tcm/login", passport.authenticate("tcm-user", { failureRedirect: "/" }), function (req, res) {
        if(req.user)
       { 
           res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
        }
        // else res.json({ success: "No"});
      });

    

    // Use the Passsport authentication for checking Login Access
    app.post("/api/sum/login", passport.authenticate("sum-user", { failureRedirect: "/" }), function (req, res) {
        if(req.user)
       { 
           res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
        }
        // else res.json({ success: "No"});
      });



    app.get("/", function(req, res) {

        // console.log("redirect");
        if(!req.user) {
            
            res.json({ success: (req.user ? "Yes" : "No") });
        }
        //   res.sendFile(path.join(__dirname, "../client/public/index.html"));
        
      });
    
}