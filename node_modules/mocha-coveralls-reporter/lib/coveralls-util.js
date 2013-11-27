var request = require('request');

var COVERALLS_API_ENDPOINT = 'https://coveralls.io/api/v1/jobs';

/**
 * Submit a Mocha formatted coverage report to Coveralls service.
 *
 * Do the convertion in beetween.
 *
 * @param {Object}   report         - Mocha formatted coverage report
 * @param {String}   service_job_id - service job id
 * @param {String}   [service_name='travis-ci']
 * @param {Function} cb             - callback
 */
exports.submitJSONCovToCoveralls = function(report, service_job_id, service_name, cb) {

  //servicename optionnel: args shift
  if(typeof service_name === 'function') {
    cb = service_name;
    service_name = undefined;
  }

  //default
  service_name = service_name || 'travis-ci';

  //convert
  var c_report = JSONCovReportToCoverallsReport(report);

  var json_file = {
    service_job_id : service_job_id,
    service_name   : service_name,
    source_files   : c_report
  };

  request({
    url : COVERALLS_API_ENDPOINT,
    method : 'POST',
    form : {
      json : JSON.stringify(json_file)
    }
  }, function(err, response, body){
    cb(err, response);
  });

  // var r = request.post(COVERALLS_API_ENDPOINT)
  //        .form({json_file : json_file})
  //        .on('data', function(data) {
  //         console.log(data);
  //        })
  //        .on('error', function(err) {
  //         console.log(err);
  //        });
  //        console.dir(r)
};


/**
 * Transform Mocha formatted JSONCov report into
 * a Coveralls accpetable coverage report.
 * 
 * @param {Object} jsoncov - Mocha formatted JSONCov report
 * @return {Object} Coverall formatted reported
 */
var JSONCovReportToCoverallsReport = function(report){
  return report.files.map(function(file) {
    return JSONCovFileReportToCoverallsFileReport(file.source, file.filename);
  });
};


/**
 * Transform  a mocha formatedd source report and transform
 * in coverall formatted file report.
 *
 * Input: foo.js
 *
 *    {
 *      "1": {
 *        "source": "var JSV = require('JSV').JSV;",
 *        "coverage": 3
 *      },
 *      "2": {
 *        "source": "var _ = require('underscore');",
 *        "coverage": ""
 *      }
 *    }
 *
 * Output:
 *
 *    {
 *      name: "foo.js",
 *      source: "var JSV = require('JSV').JSV;\nvar _ = require('underscore');\n",
 *      coverage: [3,null]
 *    }
 *  
 * @param {[type]} source    [description]
 * @param {[type]} filename [description]
 */
var JSONCovFileReportToCoverallsFileReport = function(source, filename) {
  //aggregated source
  var aggr_source = "";
  //aggregated coverage
  var aggr_coverage = [];

  for(var i = 1; typeof source[i] !== 'undefined' ; i++) {
    aggr_source += source[i].source + "\n";

    var _cov = source[i].coverage;
    //transform "" into null 
    aggr_coverage.push(_cov === "" ? null : parseInt(_cov, 10));
  }

  return {
    name     : filename,
    source  : aggr_source,
    coverage : aggr_coverage
  };
};
