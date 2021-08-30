const router = require('express').Router();

const {
  validateUsername,
  validateEmail,
  validatePassword
} = require('../middlewares/validations');

router.post('/register', 
validateUsername,
validateEmail,
validatePassword,
(req, res) => res.status(201).json({message: 'user created'})
);

router.post('/login',
validateEmail,
validatePassword,
(req, res) => res.status(200).json({token: '86567349784e'})
);
