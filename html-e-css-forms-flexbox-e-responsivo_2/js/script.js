const estadosBr = ['Acre','Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const dropDownList = document.querySelector('#input-estado'); // captura o drop Down

function createOptions() {
  for (let i = 0; i < estadosBr.length; i+= 1) {
    const createStateList = document.createElement('option'); // cria uma option
    createStateList.innerText = estadosBr[i]; // a option recebe o texto contido na lista de estados
    dropDownList.appendChild(createStateList); // coloca a option dentro do dropdown
  }
}

function pickerDate() {
  let picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
    });
}


window.onload = function () {
  createOptions();
  pickerDate();
};
