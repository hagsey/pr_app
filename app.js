var express = require('express');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html');
});








var port = 3000;

app.listen(port, function() {
  console.log('listening on port: ' + port);
});