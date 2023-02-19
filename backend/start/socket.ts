
import Ws from 'App/Services/Ws';

Ws.boot()

/**
 * Listen for incoming socket connections
 */


console.log("SOCKET IO START");
let connections = {};
Ws.io.on('connection', (socket) => {
// ------------------
  connections[socket.id] = socket
  socket.send(socket.id)
  console.log(`Client connected ID: ${socket.id}`);

  socket.on('close', () => {
    delete connections[socket.id]
  });

  socket.on('signin', (data) => { //user entered
    Ws.io.in(socket.id).socketsJoin(`room-${data.room}`);
    Ws.addMember(data);
  });
  socket.on('exit', (data) => { //user exited
    data.socketId = socket.id;
    Ws.exit(data);
    Ws.removeMember(data);
    let msg = `${data.name} has left the chat.`;
    Ws.sendMessage({room: data.room, name: data.name, msg: msg });
  });
  socket.on('new-msg', (data) => { //new message
    data.socketId = socket.id;
    Ws.sendMessage(data);
  });
});
Ws.io.listen(3002);
