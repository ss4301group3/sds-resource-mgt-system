var express = require('express');
var router = express.Router();

var db = require('../../backend/db-connector');
var guard = require("../../backend/route-guard");

//import push function and Notification class from notifications module, 
//also applies the alias pushNotif to be clear it's for pushing Notifications
var {Notification, push: pushNotif} = require("../../backend/notifications")

router.post("/new", guard, (req,res) => {
    //new reservation
    //may call pushNotif() here, passing the new notification item to be queued
})

router.get("/me/:from-:to", guard, (req, res) => {
    var id = req.authInfo.oid;
    var from = req.params.from, to = req.params.to;
    res.status(200).json(
        {}//filter by user's azure object id passed in req
    );
});

router.get("/persons/faculty/:faculty/:from-:to", guard, (req, res) => {
    var faculty = req.params.faculty;
    var from = req.params.from, to = req.params.to;
    res.status(200).json(
        {}//filter by optional parameters
    )
});

router.get("/person/:id/:from-:to", guard, (req, res) => {
    var id = req.params.id;
    var from = req.params.from, to = req.params.to;
    res.status(200).json(
        {}//filter by user's id passed in req
    )
});

router.get("/item/:id/:from-:to", guard, (req, res) => {
    var id = req.params.id;
    var from = req.params.from, to = req.params.to;
    res.status(200).json(
        {}//filter by item's id
    );
});

router.get("/category/:id/:from-:to", guard, (req, res) => {
    var id = req.params.id;
    var from = req.params.from, to = req.params.to;
    res.status(200).json(
        {}//filter by category's index
    );
});

module.exports = router;