const readLine = require('readline-sync');

function calculaIMC(peso, altura) {
  return peso / (altura * 2);
}

const peso = readLine.questionFloat("Qual o peso? ");
const altura = readLine.questionFloat("Qual é a sua altura em metros? ")

const imc = (calculaIMC(peso, altura));

function classifica(imc) {
  if(imc < 18.5) {
    resp = "abaixo do peso (magreza)"
  } else if( 18.5 <= imc && imc <= 24.9) {
    resp = "peso normal"
  } else if( 25 <= imc && imc < 29.9) {
    resp = "acima do peso (sobrepeso)"
  } else if ( 30 <= imc && imc < 34.9) {
    resp = "obesidade grau I"
  } else if (35 <= imc && imc < 39.9) {
    resp = "obesidade grau II"
  } else {
    resp = "obesidade grau III e IV"
  }
  return resp;
}

const situacao = classifica(imc)

console.log(`O seu IMC é ${imc} e você está classificado em ${situacao}`);
