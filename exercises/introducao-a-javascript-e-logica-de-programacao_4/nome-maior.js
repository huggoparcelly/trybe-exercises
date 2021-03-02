function bigName(nomes){
  maiorNome = nomes[0];

  for(nome in nomes){  
    if(maiorNome.length < nomes[nome].length){
      maiorNome = nomes[nome];
    }
  }
  return maiorNome;
};


let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(bigName(arrayTeste));