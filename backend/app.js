const express = require('express');
const app = express();
app.use((req,res, next)=>{
  console.log('This is first middleware');
  next();
});
app.use((req,res, next)=>{
  res.send('Hello from express');
});
module.exports = app;
