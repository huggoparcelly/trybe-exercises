let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1

for(let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i]);
}

//Exercicio 2

let soma = 0;
for(let i = 0; i < numbers.length; i += 1){
  soma += numbers[i];
}
console.log(`A soma dos  valores é: ${soma}`);

//Exercicio 3

let media=0;

media = soma / numbers.length;
console.log(`A média dos valores é: ${media}`);