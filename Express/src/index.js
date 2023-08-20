const path = require('path');

const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');//for index.hbs file in views folder

// app.use(express.static(staticPath));//for html file in public folder

// app.set('views','../Tamplates/views');
app.set('views', '../Templates/views');

// hbs.registerPartials(path.join(__dirname, '../Templates/partials'));


app.get("",(req,res)=>{
  res.render('index',{
    name:"Pranjal",
  });
});


app.get("/about",(req,res)=>{
  res.render('about',{
      about:"About",
    });
});

app.get("*",(req,res)=>{
  // res.end("everything else")
  // res.render("404",{
  //   errorcomment : "OOPS page could not be found"
  // })
  res.end("no");
})

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

app.listen(3000, () => {
  console.log('listening on port 3000!');
});