const fs = require('node:fs');

const folderName = 'Jeet';

try {
  if (!fs.access(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}