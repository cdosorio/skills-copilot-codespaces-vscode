// Create web server
var server = http.createServer(app);

// start web server
server.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

// create socket.io server
var io = require('socket.io')(server);

// listen for socket.io connections
io.on('connection', function(socket) {
    console.log('Socket.io client connected');

    // listen for 'chat' event
    socket.on('chat', function(data) {
        console.log('chat event received: ' + data.message);
        // broadcast chat event to all connected clients
        io.sockets.emit('chat', data);
    });

    // listen for 'typing' event
    socket.on('typing', function(data) {
        console.log('typing event received: ' + data.username);
        // broadcast typing event to all connected clients
        socket.broadcast.emit('typing', data);
    });
});



