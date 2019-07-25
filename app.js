const WebSocket = require('ws');
 

const PORT = process.env.PORT;
const wss = new WebSocket.Server({ port: PORT });
 
console.log('started on port ',PORT);
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});