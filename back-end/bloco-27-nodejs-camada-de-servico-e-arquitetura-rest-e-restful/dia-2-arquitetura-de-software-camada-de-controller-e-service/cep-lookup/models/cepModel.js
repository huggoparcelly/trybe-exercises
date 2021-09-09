const connection = require('./connection');

const cepRegex = /\d{5}-?\d{3}/;

// Função que formata um CEP
const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if(cepRegex.test(cep)) return cep;
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2')
}

// Formata os campos para exibição
const getNewCep = ({cep, logradouro, bairro, localidade, uf}) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

const getAddressByCep = async (cep) => {
  // removendo o traço do cep para armazenar no bd
  const cepNumber = cep.replace('-', '');

  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [result] = await connection.query(query, [cepNumber]);
  
  if(!result.length) return null;

  return getNewCep(result[0]);
}

const createAddress = async ({cep, logradouro, bairro, localidade, uf}) => {
  // removendo o traço do cep para armazenar no bd
  const cepNumber = cep.replace('-', '');
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)'
  
  await connection.query(query, [cepNumber, logradouro, bairro, localidade, uf]);
  
  return {cep, logradouro, bairro, localidade, uf};
}

module.exports = {
  getAddressByCep,
  createAddress,
}