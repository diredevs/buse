var dbconfig = require('./config/database');
var mongoose = require('mongoose');
var server = require('./server');

mongoose.connect(dbconfig.url, dbconfig.connectionHandler);
server.start();