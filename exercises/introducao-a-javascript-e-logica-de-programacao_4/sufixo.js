function verificaSufixo(word, ending){
  let letters = word.split("");
  let sufix = ending.split("");
  controle = true;
  for(let i = 0; i < sufix.length; i += 1){
    if(word[word.length - sufix.length + i] != sufix[i]){
      controle = false;
    }
  }
  return controle;
}


let wordTest = "Huggo";
let endingTest = "go";

console.log(verificaSufixo(wordTest, endingTest));