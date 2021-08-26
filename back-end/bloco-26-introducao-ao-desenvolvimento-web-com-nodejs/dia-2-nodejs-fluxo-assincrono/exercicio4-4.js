// realizado com ajuda do gabarito

const fs = require('fs').promises;

async function createFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((dataFile) => JSON.parse(dataFile));

  // cria um novo array apenas com os membros da familia
  const family = simpsons.filter((simpson) => [1, 2, 3, 4].includes(simpson.id));

  // cria o arquivo inexistente com os valores de family
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
}

createFamily();