const bodyParser = require('body-parser');
const express = require('express');

const simpsonsUtils = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'pong'});
});

app.post('/hello', (req, res) => {
  const {name} = req.body;
  res.status(201).json({message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const {name, age} = req.body;
  if(age <= 17) return res.status(401).json({message: "Unauthorized"})
  return res.status(200).json({message: `Hello, ${name}`});
});


app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.body;
  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.get('/simpsons', async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
});


app.listen(3000);