import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	if (process.env.TERM_PROGRAM !== 'iTerm.app') {
		t.pass();
		return;
	}

	const {stdout} = await execa('./cli.js', ['fixture.jpg']);
	t.true(stdout.includes('\u001B]1337;File=inline=1:'));
});
