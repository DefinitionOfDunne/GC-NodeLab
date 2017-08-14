var express = require('express');
var app = express();
var randomized = require('./app.js');

app.get('/', function (req, res) {
  res.send('Navigate to /random to get your string!');
});
app.get('/random', function (req, res) {
  res.send(randomized());
});

app.listen(3000, function () {
  console.log('Server running on Port 3000!');
});