function verificaNumero(num) {
  if(isNaN(num)) return "o valor deve ser um número"
  if(num>0) return "positivo";
  else if(num<0) return "negativo";
  return "neutro";
}

module.exports = verificaNumero;