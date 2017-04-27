An easy to use webpack entry maker.


### Installation
---
- `npm install webpack-entry-maker`

### Usage
webpack-entry-maker exposes one function which take 3 arguments:
- src: The source directory.
- reg: A regular expression used to match files to be compiled.
- transform: A transform function used to modify the target file name. This function takes one argument containing the original file name and returns the modified one. If you want no change, just return the only argument as it is.

### Code Example
---
```
const path = require('path');
const makeEntries = require('webpack-entry-maker');

function transform(entry) {
  return path.relative(process.cwd(), entry).replace(/(\.jsx?$)|(^src\/)/g, '');
}

module.exports = {
    entry: makeEntries(path.join(__dirname, './src'), /\.js$/, transform),
    output: {
          path: path.join(__dirname, './dist'),
          filename: '[name].js',
          libraryTarget: 'umd',
          chunkFilename: '[name].js',
        },
  };
```
With this webpack configuration, you can compile every source file inside `src` ending in js to `dist` directory.

If the structure of `src` is like this:
```
src/index.js
src/next/next.js
```
Then the resulting structure of dist would be:
```
dist/index.js
dist/next/next.js
```

### Run Local Demo
---

- `git clone https://github.com/lo-tp/webpack-entry-maker`
- `cd webpack-entry-maker/example`
- `npm install`
- `npm run build`
- `node test.js`
