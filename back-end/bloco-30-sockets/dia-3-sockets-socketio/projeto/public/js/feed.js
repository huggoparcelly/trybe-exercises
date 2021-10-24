const socket = window.io();

const likeIcon = document.getElementById('likeIcon');
const starIcon = document.getElementById('starIcon');

likeIcon.addEventListener('click', (e) => {
  socket.emit('likePost');
  return false;
});

starIcon.addEventListener('click', (e) => {
  socket.emit('starPost');
  return false;
});

const incremets = (elementId) => {
  const currentLikes = document.getElementById(elementId);
  let increment = parseInt(currentLikes.innerText, 10);
  increment++
  currentLikes.innerHTML = increment
} 

socket.on('updateLikes', () => incremets('currentLikes'));
socket.on('updateStars', () => incremets('currentStars'));
