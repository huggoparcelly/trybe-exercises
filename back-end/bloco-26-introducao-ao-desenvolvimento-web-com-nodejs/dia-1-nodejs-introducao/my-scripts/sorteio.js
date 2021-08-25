const readLine = require('readline-sync');

function getRandom() {
  return Math.floor(Math.random() * 10 );
}

function mensagem(numUsuario, numRandom) {
  if(numUsuario === numRandom) {
   return console.log("Parabéns, número correto!");
  } else {
    return console.log(`Opa, não foi dessa vez, o número era ${numRandom}`);
  }
}

function play() {
  const numRandom = getRandom();
  const numUsuario = readLine.questionInt("O número sorteado entre 0 e 10 foi? ")
  
  mensagem(numUsuario, numRandom);
  const resposta = readLine.question("Digite SIM para jogar novamente... ")

  if(resposta !== "sim") return ("Até logo!");
  
  play();
}

play();
