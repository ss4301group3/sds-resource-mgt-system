var express = require('express');
var router = express.Router();

var db = require('../../backend/db-connector');
var cache = require('../../backend/db-cache');

router.get('/all', function(req, res, next) {
    res.json(
        {}//get all
    );
});

module.exports = router;