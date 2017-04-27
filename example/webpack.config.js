const path = require('path');
const makeEntries = require('../index');

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
