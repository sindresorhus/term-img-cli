# term-img-cli

> Display images in iTerm

![](screenshot.jpg)

*Currently only supported on [iTerm >=3](https://www.iterm2.com/downloads.html).*

## Install

```sh
npm install --global term-img-cli
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

- [term-img](https://github.com/sindresorhus/term-img) - API for this package
- [terminal-image-cli](https://github.com/sindresorhus/terminal-image-cli) - Like this module but works in any terminal
