const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://morejump:PZx8TAAD7pQZykuU@cluster0-eufyy.mongodb.net/node-angular?retryWrites=true").then(()=>{
  console.log('Connect to database');
})
.catch(()=>{
  console.log('Connect to database failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//PZx8TAAD7pQZykuU

// middleware
app.use((req,res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "Origin,X-Request-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS")
   next();
});
// post
app.post('/api/posts',(req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201);
  console.log(post);
  res.json({
   message: 'Post added successfully!'
  });
});
// get
app.get('/api/posts',(req,res, next) => {
  Post.find()
  .then( documents =>{
     console.log(documents);
     res.status(200).json({
      message: 'Fetched data successfully',
      posts: documents
    });
  });

});
module.exports = app;
