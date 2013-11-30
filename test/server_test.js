var http = require('http');
var server  = require(__dirname + './../server.js');
var port = 5000;
var should = require('should');
var supertest = require('supertest');
var api = supertest('http://localhost:5000');

function defaultGetOptions(path) {
  var options = {
    "host": "localhost",
    "port": port,
    "path": path,
    "method": "GET",
    "headers": {
      "Cookie": sessionCookie
    }
  };
  return options;
}

describe('server', function () {
 
  	before (function (done) {
	    server.listen(port, function (err, result) {
			if (err) {
				done(err);
			} else {
				done();
			}
		});
 
		after(function (done) {
			server.close();
	  	});
	 
	  	it('should exist', function (done) {
		    should.exist(server);
		    done();
	  	});
	 
	  	it('should be listening at localhost:5000', function (done) {
		    var headers = defaultGetOptions('/');
		    http.get(headers, function (res) {
		      res.statusCode.should.eql(404);
		      done();
		    });
	  	}); 
	});


});

describe('GET', function() {
	it('returns buses as JSON', function(done) {
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

