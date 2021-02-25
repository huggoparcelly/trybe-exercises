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

//Exercicio 4

if (media > 20){
  console.log("valor maior que 20")
}else{
  console.log("Valor menor ou igual a 20")
}

//Exercicio 5

let maior = numbers[0]
for(let valor = 0; valor < numbers.length; valor += 1){
  if (maior < numbers[valor]){
    maior = numbers[valor];
  }
}
console.log(`O maior valor é ${maior}`)

//Exercicio 6

let contImpar = 0;

for(let value = 0; value < numbers.length; value += 1){
  if(numbers[value] % 2 != 0){
    contImpar += 1;
  }
}

if (contImpar > 0){
  console.log(`Existe(m) ${contImpar} valor(es) impar(es)`)
}else{
  console.log("nenhum valor impar encontrado")
}

//Exercicio 7

let menor = numbers[0]
for(let cont = 0; cont < numbers.length; cont += 1){
  if (menor > numbers[cont]){
    menor = numbers[cont];
  }
}
console.log(`O menor valor é ${menor}`)


