var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.on('Chat message', (msg) => {
        io.emit('Chat message', msg);
    })
})

http.listen(3000, () => {
    console.log('Listening on *:3000');
})