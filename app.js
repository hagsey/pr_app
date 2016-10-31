var express = require('express');
var app = express();
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var dirname = __dirname + '/client';
var port = 3000;
var logger = require('./logger');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory');

// MIDDLEWARE
app.use(express.static('public'));


// DATABASE

// db.serialize(function() {

//   db.run('CREATE TABLE lorem (info TEXT)');
//   var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

//   for (var i = 0; i < 10; i++) {
//     stmt.run('Ipsum ' + i);
//   }

//   stmt.finalize();

//   db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
//     console.log(row.id + ': ' + row.info);
//   });
// });

// db.close();


// VARIABLE CHECKER
// Add variables here to check their value in console
var vars_to_check = {
  // 'exists': exists
};



// SERVER
app.listen(port, function() {
  logger(vars_to_check);
  console.log('listening on localhost:' + port + "...");
});