// set up 
var express 	= require('express');
var app 		= express(); 								// create our app w/ express
var mongoose	= require('mongoose'); 					// mongoose for mongodb
var db 			= require('./config/database');
var port 		= process.env.PORT || 5000;		

// configuration 
mongoose.connect(db.url, db.connectionHandler);

app.configure(function() {
	app.use(express.static(__dirname + '/public')); // set the static files location /public
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.json());
	app.use(express.urlencoded());	// pull information from html in POST
	app.use(express.methodOverride()); 	// simulate DELETE and PUT
});

// routes 
require('./app/routes.js')(app);

// listen (start app with node server.js) 
app.listen(port);
console.log("App listening on port " +  port);
