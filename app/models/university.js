var mongoose = require('mongoose');

// define schema =================
var Schema = mongoose.Schema;

var universitySchema = new Schema({
	northwest : Number,
	southeast : Number,
	name : String
});

module.exports = mongoose.model('University', universitySchema);