var mongoose = require('mongoose');

// define schema =================
var Schema = mongoose.Schema;

var universitySchema = new Schema({
	name 		: String,
	northwest 	: Number,
	southeast 	: Number,
	busStops	: {}
});

module.exports = mongoose.model('University', universitySchema);