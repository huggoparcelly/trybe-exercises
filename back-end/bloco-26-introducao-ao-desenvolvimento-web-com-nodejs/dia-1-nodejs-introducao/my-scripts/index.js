const readLine = require('readline-sync');

console.log("1 - IMC");
console.log("2 - Velocidade");
console.log("3 - Sorteio");

function escolha() {
  const script = readLine.questionInt("Escolha um script para ser executado... ");
  console.log("\n");
  switch(script) {
    case 1:
      require('./imc');
      break
    case 2:
      require('./velocidade');
      break
    case 3:
      require('./sorteio');
      break
    default:
      console.log("Opção inválida")
  }
}

escolha();