const express = require("express");
const db = require("../database/db");

module.exports = app => {
    const users = require("../controller/userlist.controller");
    const path = require("path");

    const router = require("express").Router();

    router.get("/", function (req,res,next) {
        res.render("index");
    })

    router.get("/addlist", function (req,res,next) {
        res.render('addlist');
    })

    router.post("/addlist", function (req,res,next) {
        const userDetails = req.body;
        var sql = 'INSERT INTO users SET ?';
        db.query(sql, userDetails, function (err, data) {
            if (err) throw err;
            console.log("User register successfully ");
        })
        res.redirect('list');
    })

    router.get("/list", function (req,res,next) {
        var sql = "select * from users";
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.render('list',  {title: 'List', usersData: data})
        })
    })

    app.use('/', router);

    module.exports = router;
}