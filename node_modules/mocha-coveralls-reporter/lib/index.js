var CoverallsReporter = require('./coveralls-reporter');

//expose reporter and util function
exports = module.exports = CoverallsReporter;
CoverallsReporter.submitJSONCovToCoveralls = require('./coveralls-util').submitJSONCovToCoveralls;