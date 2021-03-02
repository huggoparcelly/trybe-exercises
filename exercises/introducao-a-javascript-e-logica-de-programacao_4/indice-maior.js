function bigIndex(array) {
  let maior = array[0];
  let indexBig = 0;
  
  for(let index in array){
    if(maior < array[index]){
      maior = array[index];
      indexBig = index;
    }
  }
  return indexBig;
}

arrayTeste = [2, 4, 6, 7, 10, 0, -3];

console.log(bigIndex(arrayTeste));