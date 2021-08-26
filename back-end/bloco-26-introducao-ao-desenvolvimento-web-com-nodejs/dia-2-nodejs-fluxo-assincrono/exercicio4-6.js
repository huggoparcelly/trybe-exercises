const fs = require('fs').promises;

async function changeNelsonToMaggie() {
  return fs.readFile('./simpsonsFamily', 'utf-8')
    .then((dataFile) => JSON.parse(dataFile))
    // filtro para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // cria um novo array com Maggie
    .then((simpsonWhitOutNelson) => simpsonWhitOutNelson.concat([{"id": "8", "name": "Maggie Simpson"}]))
    // escrever o novo array no arquivo
    .then((simpsonWhitMaggie) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonWhitMaggie)));
}
