	//load the models
var Bus = require('./models/bus');

//expose the routes to our app
module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all buses
	app.get('/api/buses', function(req, res) {

		// use mongoose to get all buses in the database
		Bus.find(function(err, buses) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.status(200).json(buses); // return all buses in JSON format
		});
	});

	// create bus and send back all buses after creation
	app.post('/api/buses', function(req, res) {

		// create a bus, information comes from AJAX request from Angular
		Bus.create({
			text 	: req.body.text,
			lat 	: req.body.lat,
			lng 	: req.body.lng

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

	// update a bus
	app.post('/api/buses/:bus_id', function(req, res) {
		var lat = req.body.lat;
		var lng = req.body.lng;
		var text = req.body.text;
		
		Bus.findOneAndUpdate(
			{text: text}, 
			{lat: lat, lng : lng, text : text},
			{upsert : true},
			function(err, bus) {
				if (err)
					res.send(err);
				Bus.find(function(err, buses) {
					if (err)
						res.status(500);
					res.status(200);
				});
			});
	});

	// delete a bus
	app.del('/api/buses/:bus_id', function(req, res) {
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
	app.get("/emmiter", function(req, res) {
		res.sendfile('./public/emmiter.html');
	});

	app.get("/dbadmin", function(req, res) {
		res.sendfile('./public/dbadmin.html');
	});

	app.get("/", function(req, res) {
		res.status(200).sendfile('./public/index.html');
	});

};