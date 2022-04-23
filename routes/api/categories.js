var express = require('express');
var router = express.Router();

var { Connector } = require('../../backend/db-connector');
var cache = require('../../backend/db-cache');

router.get('/all', async function(req, res, next) {
    const data = await Connector.new(Connector.options.getCategories);
    console.log(data);
    res.json(
        data
    );
});

module.exports = router;