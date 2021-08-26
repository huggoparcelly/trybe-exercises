// realizado com ajuda do gabarito

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  // converte o json para um array
  .then((dataFile) => {
   return JSON.parse(dataFile);
  })
  // mapeia cada objeto para uma string
  .then((simpsons) => {
    return simpsons.map(({id, name}) => `${id} - ${name}`)
  })
  // exibir a string na tela
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${simpsons} \n Erro: ${err}`);
    process.exit(1);
  });

