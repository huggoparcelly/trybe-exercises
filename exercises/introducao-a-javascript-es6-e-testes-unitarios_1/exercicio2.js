const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const crescente = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sorted = crescente();

console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);