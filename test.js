import test from 'ava';
import execa from 'execa';

test(async t => {
	if (process.env.TERM_PROGRAM !== 'iTerm.app') {
		t.pass();
		return;
	}

	const stdout = (await execa('./cli.js', ['fixture.jpg'])).stdout;
	t.true(stdout.indexOf('\u001b]1337;File=inline=1:') !== -1);
});
