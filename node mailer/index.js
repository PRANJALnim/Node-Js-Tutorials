const express = require('express');
const app = express();

let port = 4000;

app.get('/', (req, res) => {
    res.send('I am server');
})

const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log('server port 4000');
        } )
    }catch(error){
        console.log('error');
    }
}

start();