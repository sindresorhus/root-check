'use strict';
var downgradeRoot = require('downgrade-root');
var sudoBlock = require('sudo-block');

module.exports = function () {
	try {
		downgradeRoot();
	} catch (_) {}

	sudoBlock.apply(null, arguments);
};
