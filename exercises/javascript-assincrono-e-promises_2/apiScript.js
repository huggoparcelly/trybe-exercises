// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const renderJoke = (data) => {
  document.getElementById('jokeContainer').innerText = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => renderJoke(data))
};

window.onload = () => fetchJoke();