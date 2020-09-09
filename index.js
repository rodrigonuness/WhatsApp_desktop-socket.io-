const fs = require('fs');
const server = require('https').createServer({
});
const options = { /* ... */ };
const io = require('socket.io')(server, options);

io.on('connection', socket => { /* ... */ });

server.listen(3000);