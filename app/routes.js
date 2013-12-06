	//load the models
var Bus = require('./models/bus');

//expose the routes to our app
module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all buses
	app.get('/api/buses', function(req, res) {
		Bus.find(function(err, buses) {
			if (err)
				res.status(500).send(err)
			res.status(200).json(buses); // return all buses in JSON format
		});
	});

	// create bus and send back all buses after creation
	app.post('/api/buses', function(req, res) {
		// create a bus, information comes from AJAX request from Angular
		Bus.create({
			text 	: req.body.nome,
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
	app.patch('/api/buses/:bus_id', function(req, res) {	
		Bus.update(
			{text: req.body.nome}, 
			{lat: req.body.lat, lng : req.body.lng},
			{upsert : true},
			function(err, bus) {
				if (err){
					res.status(500).send(err);
				}
				Bus.find(function(err, buses) {
					if (err){
						res.status(500).send();
					}
					res.status(200).send();
				});
			});
	});

	// delete a bus
	app.del('/api/buses/:bus_id', function(req, res) {
		Bus.findByIdAndRemove(req.params.bus_id, function(err, bus) {
			if (err){
				res.status(500).send(err);
			}
			else{
				if(bus != null)
					res.status(200).send();
				else
					res.status(404).send();
			}

			// get and return all the buses after you delete another
			/*Bus.find(function(err, buses) {
				if (err)
					res.status(404).send(err)
				res.status(200).json(buses);
			});*/
		});
	});

	// application -------------------------------------------------------------
	app.get("/emmiter", function(req, res) {
		res.status(200).sendfile('./public/emmiter.html');
	});

	app.get("/dbadmin", function(req, res) {
		res.status(200).sendfile('./public/dbadmin.html');
	});

	app.get("/", function(req, res) {
		res.status(200).sendfile('./public/index.html');
	});

};