const fs = require('fs').promises;

async function addNewPerson() {
  const simpsons = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((dataFile) => JSON.parse(dataFile));

  // adiciona um novo personagem ao array
  simpsons.push({"id": "8", "name": "Nelson Muntz"});

  // escrever o novo array no documento
  await fs.writeFile('./simpsonsFamily.json', simpsons);
}
