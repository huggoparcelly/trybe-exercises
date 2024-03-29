const cepModel = require('../models/cepModel');

const cepRegex = /\d{5}-?\d{3}/;

const findAddressByCep = async (cep) => {
  
  if(!cepRegex.test(cep)) return {
    error: {
      code: "invalidData",
      message: "CEP inválido"
    }
  }
  
  const address = await cepModel.getAddressByCep(cep);
 
  if(!address) return {
    error: { 
      code: "notFound",
      message: "CEP não encontrado" 
    }
  }

  return address;
};

const createAddress = async ({cep, logradouro, bairro, localidade, uf}) => {
  const existsCep = await cepModel.getAddressByCep(cep);

  if(existsCep) return {
    error: { 
      code: "alreadyExists",
      message: "CEP já existente" 
    }
  }

  const newAddress = await cepModel.createAddress({cep, logradouro, bairro, localidade, uf});
  
  return newAddress;
}

module.exports = {
  findAddressByCep,
  createAddress,
}