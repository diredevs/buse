var http = require('http');
var server  = require(__dirname + './../index.js');
var port = 5000;
var should = require('should');
var supertest = require('supertest');
var api = supertest('http://localhost:5000');

var bus;

describe('GET BUSES LIST', function() {
	it('should return buses array as JSON', function(done) {
	    api.get('/api/buses')
	    .expect(200)
	    .expect('Content-Type', /json/)
	    .end(function(err, res) {
			if (err) return done(err);
			res.body.should.be.instanceof(Array);
			done();
	    });
	});
});

describe('ADD A BUS', function() {
	it('should return buses array with the new bus inserted at last position', function(done) {
		bus = {};
		bus.text = 'circular';

	    api.post('/api/buses', bus)
	    .expect(200)
	    .expect('Content-Type', /json/)
	    .end(function(err, res) {
			if (err) 
				return done(err);
			res.body.should.be.instanceof(Array);
			bus.id = res.body[0]._id;
			done();
	    });
	});
});

describe('UPDATE A BUS POSITION', function() {
	it('should return status 200', function(done) {
		bus.lat = 84;
		bus.lng = 84;
	    api.post('/api/buses/' + bus.text, bus)
	    .expect(200)
	    .expect('Content-Type', /json/)
	    .end(function(err, res) {
			if (err) 
				return done(err);
			done();
	    });
	});
});
/*
describe('DELETE A BUS POSITION', function() {
	it('should return status 200', function(done) {
	    api.delete('/api/buses/' + bus.id)
	    .expect(200)
	    .expect('Content-Type', /json/)
	    .end(function(err, res) {
			if (err) 
				return done(err);
			done();
	    });
	});
});*/