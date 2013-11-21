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
  bus_id: Number,
  accessibility: Boolean,
});

// define model =================
var Bus = mongoose.model('Bus', busSchema);

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all todos
app.get('/api/buses', function(req, res) {

	// use mongoose to get all buses in the database
	Bus.find(function(err, buses) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)

		res.json(buses); // return all buses in JSON format
	});
});

// create bus and send back all buses after creation
app.post('/api/buses', function(req, res) {

	// create a bus, information comes from AJAX request from Angular
	Bus.create({
		lat 			: req.body.lat,
		lng 			: req.body.lng,
		accessibility 	: req.body.accessibility

	}, function(err, bus) {
		if (err)
			res.send(err);

		// get and return all the buses after you create another
		Bus.find(function(err, buses) {
			if (err)
				res.send(err)
			res.json(buses);
		});
	});

});

// delete a bus
app.delete('/api/buses/:bus_id', function(req, res) {
	Bus.remove({
		_id : req.params.bus_id
	}, function(err, bus) {
		if (err)
			res.send(err);

		// get and return all the buses after you delete another
		Bus.find(function(err, buses) {
			if (err)
				res.send(err)
			res.json(buses);
		});
	});
});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
