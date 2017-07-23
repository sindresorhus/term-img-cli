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
`);

const input = cli.input[0];

function init(data) {
	try {
		termImg(data, cli.flags);
	} catch (err) {
		if (err.name === 'UnsupportedTerminalError') {
			console.error(err.message);
			process.exit(1);
		} else {
			throw err;
		}
	}
}

if (!input && process.stdin.isTTY) {
	console.error('Specify an image');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin.buffer().then(init);
}
