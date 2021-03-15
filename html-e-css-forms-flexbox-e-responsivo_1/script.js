const estadosBr = ['Acre','Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

console.log(estadosBr[0])
console.log(estadosBr.length);

const dropDownList = document.querySelector('#input-estado');

for (let i = 0; i < estadosBr.length; i+= 1) {
  const createStateList = document.createElement('option');
  createStateList.innerText = estadosBr[i];
  dropDownList.appendChild(createStateList);
}
