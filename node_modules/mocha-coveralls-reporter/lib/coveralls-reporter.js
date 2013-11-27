var JSONCov = require('mocha').reporters.JSONCov;
var EventEmitter = require('events').EventEmitter;
var util = require('util');


exports = module.exports = CoverallsReporter;

function CoverallsReporter(runner) {
  var coveralls = require('./coveralls-util'),
  TRAVIS_JOB_ID = process.env.TRAVIS_JOB_ID || 'unknown';

  // super
  JSONCov.call(this, runner, false);
  EventEmitter.call(this);

  var self = this;

  // monkey patch mocha runner
  // to support asynchronous reporters
  // https://github.com/visionmedia/mocha/issues/812
  // otherewise mocha process is killed
  // before report has been sent
  var _run = runner.run;
  runner.run = function(kill_fn) {
    var failure;

    _run.call(this, function(f){
      failures = f;
    });

    self.on('end', function() {
      kill_fn(failures);
    });
  };

  runner.on('end', function() {
    coveralls.submitJSONCovToCoveralls(
      self.cov,
      TRAVIS_JOB_ID,
      'travis-ci',
      function(err, res) {
        //in error
        if(err) {
          console.error(err);
          self.emit('error', err);
        }
        self.emit('end');
    });

  });
}

util.inherits(CoverallsReporter, EventEmitter);
