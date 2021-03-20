function numRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexRepetido = 0;
  
  for(let num in numeros){
    let compare = numeros[num];
    for(let n in numeros){
      if(compare === numeros[n]){
        contNumero += 1;
      }
    }
 
    if(contNumero > contRepetido){
      contRepetido = contNumero;
      indexRepetido = num;
    }
  contNumero = 0;
  }
  return numeros[indexRepetido];
}



let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
console.log(numRepetido(arrayTeste));