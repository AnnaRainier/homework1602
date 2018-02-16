var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();
var db = require('./config/db');
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, function (err, database) {
  if (err) return console.log(err);
  require('./app/routes')(app, database);

app.listen(port, function () {
  console.log('We are live on ' + port);
});
});
