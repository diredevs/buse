module.exports = process.env.MYPROJ_COVERAGE
  ? require('./lib-cov/myproj')
  : require('./lib/myproj')