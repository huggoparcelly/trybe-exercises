const estadosBr = ['Acre','Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const dropDownList = document.querySelector('#input-estado'); // captura o drop Down

function createOptions() {
  for (let i = 0; i < estadosBr.length; i+= 1) {
    const createStateList = document.createElement('option'); // cria uma option
    createStateList.innerText = estadosBr[i]; // a option recebe o texto contido na lista de estados
    dropDownList.appendChild(createStateList); // coloca a option dentro do dropdown
  }
}

const inputDate = document.querySelector('#date'); // captura o input data

function validationDate() {
  const getDate = inputDate.value.split('/'); // separa os elementos pela barra
  const day = parseInt(getDate[0]);
  const month = parseInt(getDate[1]);
  const year = parseInt(getDate[2]);
  if (day < 0 || day > 31 || month < 0 || month > 12 || year < 0) {
    alert('Data incorreta!')
  }
}



window.onload = function () {
  validationDate();
  createOptions();
  document.getElementById('submit')
};
