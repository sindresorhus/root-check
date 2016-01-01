import test from 'ava';
import fn from './';

test.cb(t => {
	t.plan(1);

	const _write = process.stderr.write;
	const _exit = process.exit;

	process.getuid = () => 0;

	process.stderr.write = str => {
		process.stderr.write = _write;
		t.is(str.trim(), 'yo');
	};

	process.exit = () => {
		process.exit = _exit;
		t.end();
	};

	fn('yo');
});
