const url = "ws://localhost:8001/ws"
const mywsServer = new WebSocket(url)

let canSend = false;
let i = 0;

let handlers = [];

//handling message event
mywsServer.onmessage = function(event) {
    const { data } = event

    handlers.forEach(func => {
        func( JSON.parse(data) );
    });
}

mywsServer.onopen = function(event) {
    console.log("Socket Opened.");
    canSend = true;
}

export function RemoveHandler(func) {
    const index = handlers.indexOf(func);
    if (index > -1) {
        handlers.splice(index, 1);
    } else {
        console.log("Failed to remove handler?");
    }
}

export function AddHandler(func) {
    handlers.push(func);
}

export default mywsServer;
