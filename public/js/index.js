  var socket=io();//initiating the connection
   socket.on('connect',()=>{
     console.log("Connected");
   });
   socket.on('disconnect',()=>{
     console.log("Disconnected");
   });
  //this variable will be needed to send and receive request


socket.on('newMessage' ,(email)=>{
  console.log("new Message",email);
});
