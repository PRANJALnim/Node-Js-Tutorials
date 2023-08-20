const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('about');
});
app.get('/home', (req, res) => {
  res.send('Home');
});
app.get('/contact', (req, res) => {
  res.send('contact');
});

app.listen(3000,()=>{
    console.log('listening at port 3000');
});