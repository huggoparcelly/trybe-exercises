const estadosBr = ['Acre','Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const dropDownList = document.querySelector('#input-estado'); // captura o drop Down

function createOptions() {
  for (let i = 0; i < estadosBr.length; i+= 1) {
    const createStateList = document.createElement('option'); // cria uma option
    createStateList.innerText = estadosBr[i]; // a option recebe o texto contido na lista de estados
    dropDownList.appendChild(createStateList); // coloca a option dentro do dropdown
  }
}


window.onload = function () {
  createOptions();
  document.getElementById('submit')
};
