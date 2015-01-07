'use strict';
var test = require('ava');
var rootCheck = require('./');

test(function (t) {
	var _ = process.stderr.write;

	process.getuid = function () {
		return 0;
	};

	process.stderr.write = function (str) {
		process.stderr.write = _;
		t.assert(str.trim() === 'yo');
		t.end();
	};

	rootCheck('yo');
});
