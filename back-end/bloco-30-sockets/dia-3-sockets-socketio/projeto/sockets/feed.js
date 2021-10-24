module.exports = (io) => {
  io.on('connection', (socket) => {
    
    console.log(`Usuário ${socket.id} conectado`);

    socket.on('likePost', () => {
      io.emit('updateLikes')
    });

    socket.on('starPost', () => {
      io.emit('updateStars')
    });
});
}