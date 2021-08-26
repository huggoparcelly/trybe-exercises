function verificaNumero(num) {
  if(num>0) return "positivo";
  else if(num<0) return "negativo";
  return "neutro";
}

module.exports = verificaNumero;