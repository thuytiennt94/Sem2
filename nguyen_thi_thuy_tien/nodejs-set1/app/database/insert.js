var mysql = require('mysql');
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (id, username, firstname, lastname, mobile, password) VALUES (1,'tien','nguyen', 'tiennttt95', '095845123', '123456')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql1 = "INSERT INTO users (id,username, firstname, lastname, mobile, password) VALUES (2,'tam','nguyen','tamm2328', '095845123', '577777')";
    connection.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql2 = "INSERT INTO users (id,username, firstname, lastname, mobile, password) VALUES (3,'phuong', 'nguyen','phuongnnt522','095845123', '9855585')";
    connection.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

});