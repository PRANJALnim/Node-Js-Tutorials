const fs = require("fs");

// fs.writeFileSync("index.txt","data written in my first file created using fs core module of node js");
// fs.appendFileSync("index.txt","append is used to add contents ie old content + new content");
console.log(fs.readFileSync("index.txt").toString());