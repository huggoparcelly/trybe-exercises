function smallIndex(array){
  let menor = array[0];
  let indexSmall = 0;

  for(index in array){
    if(array[index] < menor){
      menor = array[index];
      indexSmall = index;
    }
  }
  return indexSmall;
}


let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
console.log(smallIndex(arrayTeste));
