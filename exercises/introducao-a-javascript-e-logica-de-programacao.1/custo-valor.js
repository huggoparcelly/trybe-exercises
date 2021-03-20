//function

function profit(cost, sale){
  fax = cost * 0.2; // 20% do custo
  fullCost = cost + fax;

  pro = sale - fullCost;

  if (cost < 0 || sale < 0){
    console.log("Error.");
  }else{
    console.log("Lucro com a venda de 1000 produtos:", 1000*pro);
  }
};

profit(10, 50);