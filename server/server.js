const path=require('path');
const http=require('http');//inbuilt
const express =require('express');
const socketIO=require('socket.io');
const publicPath =path.join(__dirname,'../public');
const port =process.env.PORT || 3000;
// __dirname is the rro tname
var app =express();
var server=http.createServer(app);
var io =socketIO(server);

app.use(express.static(publicPath));
// the static is the methid to fire up static files  like html,css, and javascript
io.on('connection',(socket)=>{
  console.log('New User Connected');

  socket.on('createMessage', (message)=>{
    console.log('createMessage',message);
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createdAt:new Date().getTime()
    });
  });
  socket.on('disconnect',()=>{
    console.log("User disconnected");
  });
});



//listens to new connection
//app.listen(port, () => {//app.create calls http.create server actually
  //console.log('Server is up on ');
//});
server.listen(port, () => {//app.create calls http.create server actually
  console.log('Server is up on ');
});
