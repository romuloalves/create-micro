# create-micro
> Project to create a new instance of service using [micro](https://github.com/zeit/micro)


## Installation

Install using [npm](https://www.npmjs.com/):
```
$ npm install -g create-micro
```

## Usage

```
$ create-micro -h
  Usage: create-micro [options] [command]

  Commands:

    help  Display help

  Options:

    -h, --help          Output usage information
    -n, --name [value]  Name of the basic micro application (defaults to "micro-service")
    -v, --version       Output the version number

$ create-micro -n my-application
Created!

Installing packages using yarn...
yarn install v0.21.3
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "request-promise@4.2.0" has unmet peer dependency "request@^2.34".
warning "request-promise-core@1.1.1" has unmet peer dependency "request@^2.34".
[4/4] Building fresh packages...
Done in 7.98s.

Done!
```

## License

MIT License

Copyright (c) 2016 Rômulo Alves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
