"use strict";

var express = require('express');
var authenticate = require('./data-access/authenticate.js');
var sequelize = require('./data-access/database.js');
var userService = require('./routers/user.routes.js');
require('./models/model.js');
var app = express();
var PORT = 8080;
app.use(express.json());
app.use('/user', userService);
app.get("/", function (req, res) {
  res.send("Hello World");
});
sequelize.sync().then(function () {
  console.log("Synced db.");
})["catch"](function (err) {
  console.log("Failed to sync db : ", err.message);
});
app.listen(PORT, function () {
  authenticate().then(function () {
    return console.log("Listening on http://localhost:" + PORT);
  })["catch"](function (err) {
    return console.log(err);
  });
});