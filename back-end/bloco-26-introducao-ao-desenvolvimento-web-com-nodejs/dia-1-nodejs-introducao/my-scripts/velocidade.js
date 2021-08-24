const readLine = require('readline-sync');

function calculaVelocidadeMedia(distancia, tempo) {
  return distancia / tempo;
}

const distancia = readLine.questionInt("Qual é a distancia em metros? ");
const tempo = readLine.questionInt("Qual é o tempo em segundo? ");

const veloMedia = calculaVelocidadeMedia(distancia, tempo)

console.log(`A velocidade média é ${veloMedia}`);
