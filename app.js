// app.js
// adapted from: https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09
var express = require('express');
var app = express();
var db = require('./db');

//UserController
var UserController = require('./user/userController');
app.use('/users', UserController);

module.exports = app;