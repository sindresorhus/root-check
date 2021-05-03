import test from 'ava';
import rootCheck from './index.js';

test.cb('main', t => {
	t.plan(1);

	const _write = process.stderr.write;
	const _exit = process.exit;

	process.getuid = () => 0;

	process.stderr.write = string => {
		process.stderr.write = _write;
		t.is(string.trim(), 'yo');
	};

	process.exit = () => {
		process.exit = _exit;
		t.end();
	};

	rootCheck('yo');
});
