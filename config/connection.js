// Set up MySQL connection.
var mysql = require("mysql");

var connection = null;
if(typeof process.env.JAWSDB_URL === 'undefined'){
  connection = mysql.createConnection({
        host: "localhost", //change host if needed
        port: 3306, //change port number if needed
        user: "root", //enter in your mysql username
        password: "Iloverocky21!", //enter your password
        database: "burgers_db"
    }); 
}
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;