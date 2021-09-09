const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

const cepService = require('../services/cepService');

router.get('/:cep', async(req, res) => {
  const { cep } = req.params;

  const address = await cepService.findAddressByCep(cep);
  
  if(address.error.code === 'invalidData') {
    return res.status(StatusCodes.BAD_REQUEST).json({message: address.error});
  }
  
  if(address.error.code === 'notFound') {
    return res.status(StatusCodes.NOT_FOUND).json({message: address.error});
  }

  return res.status(StatusCodes.OK).json({address});
});

router.post('/', async(req, res) => {
  const { error } = Joi.object({
    cep: Joi.not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().max(2).required(),
  }).validate(req.body);

  if(error) return res.status(StatusCodes.BAD_REQUEST).json({error})

  const {cep, logradouro, bairro, localidade, uf} = req.body;

  const newAddress = await cepService.createAddress(cep, logradouro, bairro, localidade, uf);
  
  if(newAddress.error.code === 'alreadyExists') {
    return res.status(StatusCodes.CONFLICT).json({message: newAddress.error});
  }

  return res.status(StatusCodes.CREATED).json(newAddress);
});


module.exports = router;
