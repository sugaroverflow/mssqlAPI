//set up seriate
var sql = require("seriate");

// Change the config settings to match your
// SQL Server and database
var config = {
    "server": "servername",
    "user": "username"
    "password": "***",
    "database": "db"
};

//sets seriate's default configuration, such that any reference to
//seriate from this point forward will use the same default connection settings.
sql.setDefaultConfig( config );

// include the express module
var express = require('express');
var restapi = express();

//add a route - currently only /test
restapi.get('/test', function(req, res) {
  sql.execute({
    query: "SELECT * FROM EOCArteries"
  }).then(function(results) {
    console.log(results);
  }, function(err) {
    console.log("Something bad happened:", err);
  });
});

restapi.listen(3000);

console.log("Submit GET to http://localhost:3000/test");
