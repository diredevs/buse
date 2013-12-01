// set up 
var express 	= require('express');
var app 		= express(); // create our app w/ express	
var path		= __dirname; //root path	

// configuration 
app.configure(function() {
	app.use(express.static(path));
	app.use(express.json());
	app.use(express.urlencoded());	// pull information from html in POST
	app.use(express.methodOverride()); 	// simulate DELETE and PUT
});

function start() {
	// routes 
	require('./app/routes.js')(app);
	// listen (start app with node server.js) 
	app.listen(process.env.PORT || 5000);
	console.log("Server listening for incoming conections..");
}

//************************
exports.start = start;
exports.app = app;