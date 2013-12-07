var mongoose = require('mongoose');

// define schema =================
var Schema = mongoose.Schema;

var busStopSchema = new Schema({
	lat 	: Number,
	lng 	: Number,
	buses 	: {}
});

module.exports = mongoose.model('BusStop', busStopSchema);