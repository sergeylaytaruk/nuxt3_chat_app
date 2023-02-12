/*const WebSocket = require('ws')
const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
    })
    ws.send('Hello')
})

export default function () {
    this.nuxt.hook('listen', server => {
        server.on('upgrade', (request, socket, head) => {
            wss.handleUpgrade(request, socket, head, ws => {
                wss.emit('connection', ws);
            })
        })
    })
}*/
/*
import WebSocket from 'ws';

export default function () {
    let ws = new WebSocket('ws://127.0.0.1:3001');
    // if (ws) {
    //     ws.onerror = ws.onopen = ws.onclose = null;
    //     ws.close();
    // }

    //ws = new WebSocket(`ws://${location.host}`);
    ws.onerror = function () {
        showMessage('WebSocket error');
    };
    ws.onopen = function () {
        showMessage("CONNECTION ESTABLISHED.");
        //showMessage('WebSocket connection established');

    };
    ws.onclose = function (event) {
        showMessage('WebSocket connection closed');
        console.error('Код: ' + event.code + ' причина: ' + event.reason);
        ws = null;
    };
}

function showMessage(message) {
    console.log(message);
}
*/
//export default function () {}

