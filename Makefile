BABEL=./node_modules/.bin/babel
JASMINE=./node_modules/.bin/jasmine

js = date-tool.es5.js
spec = spec/date-tool-spec.es5.js

all: node_modules $(js) $(spec)

test: all
	$(JASMINE)

%.es5.js:: %.js
	$(BABEL) --presets es2015 -o $@ $<

node_modules:
	npm install

.PHONY: all test