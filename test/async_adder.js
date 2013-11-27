var should = require('should');
var Adder = require('../async_adder').Adder;

describe('Asynchronous Adder', function() {
	describe('add()', function() {
		it('should callback with 3 when adding 1 and 2', function(done) {
			var adder = new Adder();
			adder.add(1, 2, function(result) {
				result.should.equal(3);
				done();
			});
		});
	});
});