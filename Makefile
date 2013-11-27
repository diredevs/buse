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
			@MYPROJ_COVERAGE=1 $(MAKE) 	test REPORTER=html-cov > ./node_modules/coveralls/bin/coveralls.js

lib-cov:
		@jscoverage lib lib-cov

.PHONY: test test-w