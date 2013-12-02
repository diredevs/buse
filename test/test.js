var should = require('should'); 
var assert = require('assert');
var request = require('supertest');
var server = require(__dirname+'./../index.js');


describe('Routing', function() {
  var url = 'http://localhost:5000';
  var bus = {text: 'busao de teste', lat: 80, lng: 80};

  before(function(done) {
    bus.id = request(url).post('/api/buses', bus)
      .end(function(err, res) {
        if (err) 
          return done(err);
        res.body.should.be.instanceof(Array);
        bus.id = res.body[res.body.length -1]._id;
        done();
      });
  });

  describe('API', function() {
    it('should return a json containing an array of buses', function(done){
      request(url)
        .get('/api/buses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err)
            return done(err)
          res.body.should.be.instanceof(Array);
          done();
        });
    }); 

    it('should return status 200 after CREATING a bus', function(done) {
      request(url)
        .post('/api/buses', bus)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    it('should return status 200 after UPDATING a bus', function(done) {
      request(url)
        .post('/api/buses/' + bus.text, bus)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    it('should return status 200 after DELETING a bus', function(done) {
      request(url)
        .del('/api/buses/' + bus.id)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });
  });

  describe('Views request', function(){
    it('should return status 200 when requesting the main view', function(done) {
      request(url)
        .get('/')
        .end(function(err, res) {
          if(err){
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should return status 200 when requesting the emmiter view', function(done) {
      request(url)
        .get('/emmiter')
        .end(function(err, res) {
          if(err){
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should return status 200 when requesting the database view', function(done) {
      request(url)
        .get('/dbadmin')
        .end(function(err, res) {
          if(err){
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });
  });
});