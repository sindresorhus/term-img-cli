#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const termImg = require('term-img');

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
		termImg(data, cli.flags);
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
