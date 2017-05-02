
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require ('body-parser');
// const mongoose = require('mongoose');
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
//const Boom  = require('boom');

users = [];
connections = [];

//
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//app.use('/users', require('./user'));

server.listen(port);
    console.log(`Running server on ${port}`);


app.get('/', (req, res) => {
res.sendFile(__dirname+'/index.html'); 
});

io.sockets.on('connection' , (socket) => {
connections.push(socket);
console.log("Connected: %s sockets connected", connections.length);
 
//disconnect
  socket.on('disconnected', (data) => {

users.splice(users.indexOf(socket.username), 1)
   connections.splice(connections.indexOf(socket), 1);
   updateUsernames();
    console.log("Disconnected: %s sockets connected", connections.length);
  });
 
 //Send Message\

 socket.on('send message', (data) => {
     
     io.sockets.emit('new message', {msg: data, user: socket.username});
 });

 //New user 

 socket.on('new user', (data, callback) => {
callback(true);

socket.username = data;
users.push(socket.username);
updateUsernames();
 });

function  updateUsernames() {
    io.sockets.emit('get users', users)
}

});

