// https://www.youtube.com/watch?v=ev5pgydOhT8&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=21
const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {
    var fs=require('fs');
    fs.readFile('input.txt', (err, data) => {
            if(err) return console.error(err);
            res.end(data.toString());
        });
});

server.listen(3000,() => {
    console.log('Server listening on port 3000');
});

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
//   fs.readFile('input.txt', (err, data) => {
//     if (err) {
//     //   res.writeHead(500, { 'Content-Type': 'text/plain' });
//     //   res.end('Error reading file');
//       console.error(err);
//       return;
//     }
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(data.toString());
//   });
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
