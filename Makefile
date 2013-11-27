REPORTER = nyan

test:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--require should \

test-w:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--watch

test-cov: lib-cov
			@MYPROJ_COVERAGE=1 $(MAKE) 	test REPORTER=html-cov > coverage.html-cov

test-coveralls:
			@NODE_ENV=test ./node_modules/.bin/istanbul cover \
			./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && \
				cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js --verbose

lib-cov:
		@jscoverage lib lib-cov

.PHONY: test test-w