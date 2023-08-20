//HTTP moduke using - https://www.youtube.com/watch?v=VLXAzzRjQws

const http = require('http');

const server = http.createServer();

server.on("connection", (req,res)=>{
    res.send("Hello");
})

server.listen(3000);

console.log("Listening on port 3000");