const mysql = require('mysql');

var config = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "novastrid"
}


var connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
    if (err){
        console.log('error connecting:' + err.stack);
    }
    console.log('connected to DB successfully');
});

module.exports = {
    connection : mysql.createConnection(config)
}