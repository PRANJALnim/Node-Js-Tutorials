const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Hello from the other world");
    res.end("Hello from the other world");
});

server.listen(3000);