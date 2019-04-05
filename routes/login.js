var db = require("../models");
var passport = require("../config/passport");
var UserInfo;

module.exports = function (app) {

    app.post("/api/tcm/login", passport.authenticate("tcm-user", { failureRedirect: "/" }), function (req, res) {
        if(req.user)
       { 
           res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
        }
        // else res.json({ success: "No"});
      });

    
    // app.post("/api/tcms/login", function (req, res) {
    //     // console.log("userInfo",req.body);
    //     db.TCM.findOne({
    //         where: {
    //             email: req.body.email,
    //             password: req.body.password,
    //         }
    //     })
    //         .then(function (users) {
    //             console.log(users);
    //             if (users == null) {
    //                 res.json(users);
    //             }
    //             else {
    //                 users.password = "";
    //                 res.json(users);
    //             }
    //         })
    //         .catch(err => res.status(422).json(err));
    // });

    app.post("/api/sum/login", passport.authenticate("sum-user", { failureRedirect: "/" }), function (req, res) {
        if(req.user)
       { 
           res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
        }
        // else res.json({ success: "No"});
      });
    // app.post("/api/sum/login", function (req, res) {

    //     db.SUM.findOne({
    //         where: {
    //             email: req.body.email,
    //             password: req.body.password,
    //         }
    //     })
    //         .then(function (users) {
    //             // console.log(users);
    //             if (users == null) {
    //                 res.json(users);
    //             }
    //             else {
    //                 users.password = "";
    //                 res.json(users);
    //             }
    //         })
    //         .catch(err => res.status(422).json(err));
    // });

    app.get("/", function(req, res) {

        // console.log("redirect");
        if(!req.user) {
            
            res.json({ success: (req.user ? "Yes" : "No") });
        }
        //   res.sendFile(path.join(__dirname, "../client/public/index.html"));
        
      });
    
}