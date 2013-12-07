var mongoose = require('mongoose');

// define schema =================
var Schema = mongoose.Schema;

var busStopSchema = new Schema({
	lat : Number,
	lng : Number,
	city : String
});

module.exports = mongoose.model('BusStop', busStopSchema);