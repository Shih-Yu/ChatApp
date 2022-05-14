// Connect client to server
let socket = io.connect("http://localhost:4000");

// Getting DOM elements
let message = document.getElementById("message");
let button = document.getElementById('send');
let username = document.getElementById('username');
let output = document.getElementById('output');

// Send message with message and username when the send button is clicked
button.addEventListener('click', () => {
  socket.emit('sendingMessage', {
    message: message.value,
    username: username.value
  })
})

// Display messages in chat from the server
socket.on('broadcastMessage', (data) => {
  output.innerHTML += '<p><strong>' + data.username + ": </strong>" + data.message + '</p>'
})