let custo = 10;
let venda = 25;

imposto = custo * 0.2; // 20% do custo
custoTotal = custo + imposto;

lucro = venda - custoTotal;

if (custo < 0 || venda < 0){
  console.log("Error.");
}else{
  console.log("Lucro com a venda de 1000 produtos:", 1000*lucro);
}