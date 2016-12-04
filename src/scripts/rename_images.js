const fs = require('fs');
const path = require('path');

const pipesFolder = path.join(__dirname, './public/assets/pipes');
fs.readdir(pipesFolder, (err, folders) => {
  if (err) { console.error(err); }
  else {
    folders.filter(folder => folder !== '.DS_Store').forEach(folder => {
      fs.readdir(
        path.join(pipesFolder, folder),
        (err, filenames) => {
          if (err) { console.error(err); }
          else {
            filenames.forEach(filename => {
              const isJpeg = /\.jpeg$/.test(filenames);
              if (isJpeg) {
                const newFilename = filename.replace(/\.jpeg/, '.jpg');
                fs.rename(
                  path.join(pipesFolder, folder, filename),
                  path.join(pipesFolder, folder, newFilename),
                  (err) => console.error(err)
                );
              }
            });
          }
        }
      );
    });
  }
});
