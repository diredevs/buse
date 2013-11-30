REPORTER = spec
HTML_FILE = /home/roger/Documents/Buse/coverage/coverage1.html

test:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--require should \

test-w:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--watch

test-coveralls:
		@NODE_ENV=test ./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && \
				cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js --verbose

test-cov:
		@NODE_ENV=testLocal ./node_modules/.bin/istanbul cover \
				./node_modules/mocha/bin/_mocha --report html -- -R $(REPORTER)

.PHONY: test test-w