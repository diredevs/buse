var mongoose = require('mongoose');

// define schema =================
var Schema = mongoose.Schema;

var busSchema = new Schema({
	lat 		: Number,
	lng 		: Number,
	handicap 	: Boolean,
	text 		: String
});

module.exports = mongoose.model('Bus', busSchema);