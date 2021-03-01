function palindromo(word){
  let letters = word.split("");
  let isPalindromo = true;

  for(let index in letters){
    // compara a primeira com a ultima, chamando pelo index negativo
    if(letters[index] != word[(word.length - 1) - index]){  
      isPalindromo = false;
    }
  }
  return isPalindromo;
};

console.log(palindromo('arara'));