const express = require('express');
const socket = require('socket.io');

let app = express();

app.use(express.static("public"));

// Standard server - takes request and response communication
let server = app.listen(4000, () => {
  console.log("listening to port 4000");
});

// Wrapping server into socket.io to accpet bidirectional communication
let newServer = socket(server);

// Connecting the server to socket.io and get id when connected
newServer.on('connection', (socket) => {
  // Check to see if there is a message and send that message to every client that is connected
  socket.on('sendingMessage', (data) => {
  newServer.emit('broadcastMessage', data)
})

  console.log('Websocket Connected', socket.id);
});