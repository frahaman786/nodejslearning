const fs = require('node:fs');

const folderName = 'Rahim';

try {
  fs.accessSync(folderName);
  console.log("Folder Already Exist");

}catch {
  fs.mkdirSync(folderName);
  console.log("Folder Created");
}

