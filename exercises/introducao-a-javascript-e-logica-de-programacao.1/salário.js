let salario = 3000;

//INSS

if(salario < 0){
  console.log('Error.')
}else if(salario <= 1556.94){
  inss = 0.08;
  aliquotaInss = inss*salario;
}else if(salario > 1556.94 && salario <= 2594.92){
  inss = 0.09;
  aliquotaInss = inss*salario;
}else if(salario > 2594.92 && salario <= 5189.82){
  inss = 0.11;
  aliquotaInss = inss*salario;
}else if(salario > 5189.82){
  aliquotaInss = 570.88;
}

// salário com desconto do INSS
let salarioBase = salario - aliquotaInss

// Imposto de Renda

if (salarioBase <= 1903.98){
  aliquotaIr = 0;
  parcelaIr = 0;
}else if(salarioBase > 1903.98 && salarioBase <= 2826.65){
  aliquotaIr = 0.075;
  parcelaIr = 142.80;
}else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
  aliquotaIr = 0.15;
  parcelaIr = 354.80;
}else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
  aliquotaIr = 0.225;
  parcelaIr = 636.13;
}else if(salarioBase > 4664.68){
  aliquotaIr = 0.275;
  parcelaIr = 869.36;
}

let valorIr = (aliquotaIr * salarioBase) - parcelaIr;

let salarioLiquido = salarioBase - valorIr;

console.log(`O valor do salário a receber é R$ ${salarioLiquido}`)