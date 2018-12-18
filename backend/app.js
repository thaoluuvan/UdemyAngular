const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//PZx8TAAD7pQZykuU

app.use((req,res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "Origin,X-Request-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS")
   next();
});
app.post('/api/posts',(req, res) => {
  const post = req.body;
  res.status(201);
  console.log(post);
  res.json({
   message: 'Post added successfully!'
  });
});

app.get('/api/posts',(req,res, next) => {
  const posts = [
  {id: 'dddffaf', title: 'this is title', content: 'this is content'},
  {id: 'dddffaf', title: 'this is title', content: 'this is content'},
  {id: 'dddffaf', title: 'this is title', content: 'this is content'},
  {id: 'dddffaf', title: 'this is title', content: 'this is content'},
  ];
  res.status(200).json({
    message: 'Fetched data successfully',
    posts: posts
  });
});
module.exports = app;
