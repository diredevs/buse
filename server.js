// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb

// configuration =================

mongoose.connect('mongodb://<user>:<pass>@mongo.onmodulus.net:27017/ryte2jaG'); 	// connect to mongoDB database on modulus.io

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

// define schema =================
var Schema = mongoose.Schema;

var busSchema = new Schema({
  lat: Number,
  lng: Number,
  id: Number,
  accessibility: Boolean,
});

// define model =================
var Bus = mongoose.model('Bus', busSchema);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
