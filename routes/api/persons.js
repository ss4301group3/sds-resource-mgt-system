var express = require('express');
var router = express.Router();

var db = require('../../backend/db-connector');
var guard = require("../../backend/route-guard");

router.get("/", guard, (req, res) => {
    res.status(200).json(
        {}//get all
    );
});

//Go to frontend/javascripts/http.js line 42 to 46 for sample implementation
//Can edit there also to see what you may be able to do
router.get("/me", guard, (req, res) => {
    var authInfo = req.authInfo;
    res.status(200).json(authInfo.roles);
    //console.log(authInfo);
});

//Note to be used in testing only
//This is just to demonstrate what properties are accessible thru the authInfo object
//try passing only authInfo, or uncomment the console log and to see results in console (not browser)

module.exports = router;