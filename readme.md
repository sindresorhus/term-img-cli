# term-img-cli [![Build Status](https://travis-ci.org/sindresorhus/term-img-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/term-img-cli)

> Display images in your terminal

![](screenshot.jpg)

*Currently only supported on [iTerm >=3](https://www.iterm2.com/downloads.html).*


## Install

```
$ npm install --global term-img-cli
```


## Usage

```
$ term-img --help

  Usage
    $ term-img <image>
    $ cat <image> | term-img

  Options
    --width   Width to render  [N|Npx|N%]
    --height  Height to render  [N|Npx|N%]

  Examples
    $ term-img unicorn.jpg --width=200px
    $ cat unicorn.jpg | term-img --height=50%
```


## Related

- [term-img](https://github.com/sindresorhus/term-img) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
