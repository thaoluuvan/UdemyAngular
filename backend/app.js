const express = require('express');
<<<<<<< HEAD
const app = express();
app.use((req,res, next)=>{
  console.log('This is first middleware');
  next();
});
app.use((req,res, next)=>{
  res.send('Hello from express');
});
module.exports = app;
=======
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
>>>>>>> ae4c336b235236d7fdd42b96c88611fe486ee11f
