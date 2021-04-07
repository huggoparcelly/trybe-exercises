
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  // Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
  const countA = (namesAcc, name) => namesAcc + name.split('').reduce((acc, curr) => {
    if(curr === 'a' || curr === 'A') return acc + 1;
    return acc;
  }, 0)

  return names.reduce(countA, 0)
}

assert.deepStrictEqual(containsA(), 20);