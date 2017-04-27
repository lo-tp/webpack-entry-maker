var fs = require('fs');
var path = require('path');

var makeEntries = function (dir, reg, transform, result) {
    var files = fs.readdirSync(dir);
    result = result || {};
    files.forEach(file => {
                              var filePath = path.join(dir, file);
                              if (fs.statSync(filePath).isDirectory()) {
                                makeEntries(filePath, reg, transform, result);
                              } else if (file.match(reg)) {
                                var out = transform(filePath);
                                result[out] = filePath;
                              }
                            });
    return result;
  };

module.exports = makeEntries;
