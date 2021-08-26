// realizado com ajuda do gabarito

const fs = require('fs').promises;

async function searchPerson(id) {
  // ler o arquivo e transforma o json em array
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((dataFile) => JSON.parse(dataFile));

  // faz a busca do personagem pelo id
  const searchSimpson = simpsons.find((simpson) => simpson.id === id);

  // lança um erro caso não exista 
  if(!searchSimpson) {
    throw new Error("id não encontrado")
  }
  // retorna o simpson, caso encontre.
  return searchSimpson;
}