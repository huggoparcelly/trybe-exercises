let salario = 6000;

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
salarioBase = salario - aliquotaInss

