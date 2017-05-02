

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require ('body-parser');
// const mongoose = require('mongoose');
const server = require('http').createServer(app);
//const io = require('socket.io').listen(server);
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
    res.sendFile(__dirname + '/index.html');
  });  

     io.sockets.on('connection' , (socket) => {
    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);


//disconnect

    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);

});

   

