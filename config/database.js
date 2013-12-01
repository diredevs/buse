// connect to mongoDB database on modulus.io
// or use local database
var url;

if(process.env.NODE_ENV == 'testLocal')
	url =  'localhost:27017/testdb';
else
	url = 'mongodb://piu:piu@mongo.onmodulus.net:27017/ryte2jaG'

var connectionHandler = function (err, res) {
  if (err) {
  	console.log ('ERROR connecting to the database.');
  } else {
  	console.log ('Succeeded connected to the database');
  }
}

module.exports = {
	url : url,
	connectionHandler : connectionHandler
}