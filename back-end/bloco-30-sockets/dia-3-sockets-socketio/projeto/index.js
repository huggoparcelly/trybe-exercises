const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], 
  }
});

app.use(express.static(__dirname + '/public'));

require('./sockets/feed')(io);

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public/feed.html');
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, console.log(`Conectado na porta ${PORT}`));