const express = require('express');
const router = express.Router();

router.use(require("passport").initialize());

router.use('/categories', require('./api/categories'));
router.use('/items', require('./api/items'));
router.use('/reservations', require('./api/reservations'));
router.use('/persons', require('./api/persons'));

module.exports = router;