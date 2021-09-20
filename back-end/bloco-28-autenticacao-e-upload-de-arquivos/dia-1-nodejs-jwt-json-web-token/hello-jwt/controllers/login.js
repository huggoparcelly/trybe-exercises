const Joi = require('joi');
const jwt = require('jsonwebtoken');

const validation = (body) => 
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).require(),
  }).validate(body);

const { SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = (req, res, next) => {
  const { error } = validation(req.body);
  
  if (error) return next(error);

  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin,
  };

  const token = jwt.sign(payload, SECRET, jwtConfig);

  return res.status(200).json({ token });
};