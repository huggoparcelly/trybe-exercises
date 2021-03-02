function somatorio(num){
  let soma = 0;
  for(let n = 1; n <= num; n += 1){
    soma += n;
  }
  return soma;
}

console.log(somatorio(5));