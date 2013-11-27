REPORTER = spec

check: test

test:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--ui tdd \
				--require should \
				$(MOCHA_OPTS)

travis-test: test-coveralls test

test-cov: lib-cov
		@NODE_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

test-coveralls: lib-cov
		@NODE_COV=1 $(MAKE) test REPORTER=mocha-coveralls-reporter

lib-cov:
		@rm -rf lib-cov
		@jscoverage lib lib-cov

.PHONY: test lib-cov test-cov travis-test