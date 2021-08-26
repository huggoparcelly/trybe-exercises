// realizado com ajuda do gabarito

const fs = require('fs').promises;

async function removePerson() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((dataFile) => JSON.parse(dataFile));

  // filtrar o array para remover os personagens 10 e 6
  const newSimpsons = simpsons.filter((simpson) => simpson.id !== "10" && simpson.id !== "6");

  // escrever no arquivo o novo array filtrado.
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}
