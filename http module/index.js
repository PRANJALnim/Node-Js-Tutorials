const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.end('/')
    }
    else if(req.url=="/home"){
        res.end('home')
    }
    else if(req.url=="/about"){
        res.end('about')
    }
    else if(req.url=="/contact"){
        res.end('contact')
    }
    else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end('<h1>404</h1>')
    }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running")
});