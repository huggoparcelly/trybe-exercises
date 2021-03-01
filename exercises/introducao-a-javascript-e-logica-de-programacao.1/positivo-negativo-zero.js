//function

function positivoNegativo(num){
  resp = ' ';
  if (num > 0){
    resp = "Positivo"
  }else if (num < 0) {
    resp = ("Negativo")
  }else {
    resp = ("Zero")
  }
  return resp;
};

console.log(positivoNegativo(-4));
