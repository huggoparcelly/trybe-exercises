const connection = require('./connection');

const getAddressByCep = async (cep) => {
  try {    
    const query = 'SELECT * FROM ceps WHERE cep = ?';
    const [result] = await connection.query(query, [cep]);
    if(!result.length) return null;
    return result[0];
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }

}

const createAddress = async (cep, logradouro, bairro, localidade, uf) => {
  try {

    const query = `INSERT INTO ceps 
    (cep, logradouro, bairro, localidade, uf) 
    VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.query(query, [cep, logradouro, bairro, localidade, uf]);

    return {cep, logradouro, bairro, localidade, uf};
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
}

module.exports = {
  getAddressByCep,
  createAddress,
}