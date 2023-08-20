//file systemp
// const fs = require('fs');

// fs.writeFileSync("fol/bio.txt","data written in my first file created using fs core module of node js");

// fs.appendFileSync("fol/bio.txt"," newly added data in my first file created using fs core module of node");

// console.log(fs.readFileSync("fol/bio.txt").toString());

// fs.renameSync("fol/bio.txt","fol/new.txt");

// console.log(fs.readFileSync("fol/new.txt").toString());

// fs.unlinkSync("fol/new.txt");
// const fs = require("fs");

// fs.writeFileSync("index.txt","data written in my first file created using fs core module of node js");
// fs.appendFileSync("index.txt","append is used to add contents ie old content + new content");
// console.log(fs.readFileSync("index.txt").toString());


// const fs = require('fs');
// const path = require('path');
// const testFolder = './' + __dirname;

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     fs.unlinkSync(file);
//   });
// });


const fs = require('fs');
const path = require('path');
const testFolder = __dirname;

fs.readdir(testFolder, (err, files) => {
  console.log(testFolder);
  if (err) throw err;

  files.forEach(file => {
    const filePath = path.join(testFolder, file);

    if (file !== path.basename(__filename) && file !== path.basename("short.js")) {
      fs.unlinkSync(filePath);
    }
  });
});
