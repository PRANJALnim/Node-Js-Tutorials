const fs = require('fs');

// fs.writeFile('one.txt',"data in one.txt written from file index.js in asynchronus way",(err)=>{
//     if (err) console.log(err);
//     else console.log("one.txt written");
// });
// fs.appendFile('one.txt',"\nappend",(err)=>{   
//     if (err) console.log(err);
//     else console.log("one.txt appended successfully");
// });

fs.readFile('one.txt','UTF-8',(err,data)=>{
    console.log(data.toString());
    console.log(data);
    console.log("1");
});
fs.appendFile('one.txt',"\nappend",(err)=>{   
        if (err) console.log(err);
        else console.log("one.txt appended successfully");
        console.log("2");
});

fs.readFile('one.txt','utf8',(err,data)=>{
    console.log(data);
    console.log("3");
})