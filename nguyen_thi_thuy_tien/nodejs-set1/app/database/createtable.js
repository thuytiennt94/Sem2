var mysql = require('mysql');
const dbConfig = require("../config/db.config");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users(id int(11) PRIMARY KEY,username varchar(255), firstname varchar(255), lastname varchar(255), mobile varchar(255), password varchar(255))";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});