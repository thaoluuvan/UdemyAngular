const express = require('express');
const app = express();
app.use('/api/posts',(req,res, next)=>{
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
