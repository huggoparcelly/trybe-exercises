const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

const cepService = require('../services/cepService');

const findAddressByCep = rescue( async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepService.findAddressByCep(cep);

  if(address.error) {
    return next(address.error);
  }

  return res.status(StatusCodes.OK).json(address);
});

const createAddress = rescue(async (req, res, next) => {
  // Armazenamos essa parte do schema do Joi para reutilizá-la
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.max(2),
  }).validate(req.body);

  if(error) return next(error);

  const newAddress = await cepService.createAddress(req.body);

  if(newAddress.error) return next(newAddress.error);

  return res.status(StatusCodes.CREATED).json(newAddress);

})


module.exports = {
  findAddressByCep,
  createAddress
}
