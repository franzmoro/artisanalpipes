const fs = require('fs');
const Path = require('path');

module.exports = {
  readFile: (currDir, relativePath) =>
    fs.readFileSync(Path.join(currDir, relativePath), 'utf-8')
  ,
  trimLastLine: string => string.replace('\n\n', '\n')
};
