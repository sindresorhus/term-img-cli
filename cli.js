#!/usr/bin/env node
import meow from 'meow';
import getStdin from 'get-stdin';
import terminalImage from 'term-img';

const cli = meow(`
	Usage
	  $ term-img <image>
	  $ cat <image> | term-img

	Options
	  --width   Width to render  [N|Npx|N%]
	  --height  Height to render  [N|Npx|N%]

	Examples
	  $ term-img unicorn.jpg --width=200px
	  $ cat unicorn.jpg | term-img --height=50%
`, {
	flags: {
		width: {
			type: 'string'
		},
		height: {
			type: 'string'
		}
	}
});

const [input] = cli.input;

function init(data) {
	try {
		console.log(terminalImage(data, cli.flags));
	} catch (error) {
		if (error.name === 'UnsupportedTerminalError') {
			console.error(error.message);
			process.exit(1);
		} else {
			throw error;
		}
	}
}

if (!input && process.stdin.isTTY) {
	console.error('Specify the path to an image');
	process.exit(1);
}

(async () => {
	init(input ? input : await getStdin.buffer());
})();
