
import Ws from 'App/Services/Ws';

Ws.boot()

/**
 * Listen for incoming socket connections
 */


console.log("SOCKET IO START");
let connections = {};
const clients = new Map();
Ws.io.on('connection', (socket) => {
// ------------------
  connections[socket.id] = socket
  socket.send(socket.id)
  console.log(`Client connected ID: ${socket.id}`);

  socket.on('close', () => {
    delete connections[socket.id]
    //delete socket.id
  });

  console.log("WEBSOCKET CONNECTED", socket.id);
  socket.emit('news', { hello: 'world123' });
  Ws.io.of('/room').on('connection', function (socket) {
    socket.on('hello', (data) => {
      console.log("NS ROOM EVENT HELLO", data);
      socket.emit("resp", "YOU ENTERED");
    });
    console.log(socket.id)
    socket.emit('entered - ', socket.id);
  });

  socket.on('my-event', (data) => {
    console.log("websocket data=", data);
  });
  socket.on('hello', (data) => {
    console.log("NS GLOBAL EVENT HELLO", data);
  });
});
Ws.io.listen(3002);

// ----------------------------

console.log("WEBSOCKET START");
Ws.wss.on('connection', function connection(ws) {
  console.log("WEBSOCKET CONNECTED");
  ws.on('error', console.error);
  ws.on('my-event', function message(data) {
    console.log('received: ', data);
  });
  ws.send('something message send');
});
