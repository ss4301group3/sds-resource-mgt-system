var express = require('express');
var router = express.Router();

var { Connector } = require('../../backend/db-connector');
var cache = require('../../backend/db-cache');

router.get('/consumables/public', async function(req, res, next) {
    const data = await Connector.new(Connector.options.getConsumablesProtected);
    console.log(data);
    res.json(
        data
    );
});

router.get('/nonconsumables/public', async function(req, res, next) {
    const data = await Connector.new(Connector.options.getNonConsumablesProtected);
    console.log(data);
    res.json(
        data
    );
});

module.exports = router;