const maiorPalavra = (frase) => {
  let arrayPalavra = frase.split(' ');
  let maxLength = 0;
  let resp = ''

  for (const word of arrayPalavra) {
    if (word.length > maxLength) {
      maxLength = word.length
      resp = word
    }
  }
  return resp;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));