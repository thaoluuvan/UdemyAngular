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
  post.save().then(createdPost =>{
    console.log(createdPost);
    res.status(201).json({
      message: 'Post added successfully!',
      postId: createdPost._id
     });
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
// delete
app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({
    _id: req.params.id
  })
  .then(result => {
   console.log(result);
   res.status(200).json({
    message: "Post deleted successfully"
   });
  });

});
module.exports = app;
