REPORTER = spec

test:
		@NODE_ENV=testLocal ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--require should \

test-coveralls:
		@NODE_ENV=testTravis ./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha -x database.js --report lcovonly -- -R spec && \
				cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js --verbose

test-cov:
		@NODE_ENV=testLocal ./node_modules/.bin/istanbul cover \
				./node_modules/mocha/bin/_mocha -x database.js --report html -- -R $(REPORTER)

.PHONY: test test-w