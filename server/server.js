const path=require('path');
const express =require('express');
const publicPath =path.join(__dirname,'../public');
const port =process.env.PORT || 3000;
// __dirname is the rro tname
var app =express();
app.use(express.static(publicPath));
// the static is the methid to fire up static files  like html,css, and javascript

app.listen(3000, () => {
  console.log('Server is up on ${port}');
});
