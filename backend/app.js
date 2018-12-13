const express = require('express');
const app =  express();
app.use('api/posts',(req, res, next)=>{
 console.log('First middlerware');
 next();
});
app.use((req, res, next)=>{
  const posts = [
    {
      id: 'ddiddidi',
      title: 'this is title',
      content: 'this is content'
    },
    {
      id: 'ddiddidi',
      title: 'this is title',
      content: 'this is content'
    },
    {
      id: 'ddiddidi',
      title: 'this is title',
      content: 'this is content'
    },
    {
      id: 'ddiddidi',
      title: 'this is title',
      content: 'this is content'
    }
  ]
  res.status(200).json({
     message: 'Fetched successfully',
     post: posts
  });
 });
 module.exports = app;
