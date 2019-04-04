var db = require("../models");

module.exports = function (app) {

    app.post("/api/tcm/login", function (req, res) {
        // console.log("userInfo",req.body);
        db.TCM.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })
            .then(function (users) {
                console.log(users);
                if (users == null) {
                    res.json(users);
                }
                else {
                    users.password = "";
                    res.json(users);
                }
            })
            .catch(err => res.status(422).json(err));
    });

    app.post("/api/sum/login", function (req, res) {

        db.SUM.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })
            .then(function (users) {
                // console.log(users);
                if (users == null) {
                    res.json(users);
                }
                else {
                    users.password = "";
                    res.json(users);
                }
            })
            .catch(err => res.status(422).json(err));
    });
}