var express = require('express');
var router = express.Router();

var db = require('../../backend/db-connector');
var guard = require("../../backend/route-guard");

router.get("/", guard, (req, res) => {
    res.status(200).json(
        {}//get all
    );
});
router.get("/me", guard, (req, res) => {
    res.status(200).json(
        req.authInfo
        //Note to be used in testing only
        //This is just to demonstrate what properties are accessible thru the authInfo object
    );
});

module.exports = router;