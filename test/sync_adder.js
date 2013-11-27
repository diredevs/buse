var should = require('should');
var Adder = require('../sync_adder').Adder;

describe('Synchronous Adder', function() {
	describe('add()', function() {
		it('should return 3 when adding 1 and 2', function() {
			var adder = new Adder();
			adder.add(1, 2).should.equal(3);
		});
	});
});