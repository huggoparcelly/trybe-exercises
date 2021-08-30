const bodyParser = require('body-parser');
const express = require('express');

const authMiddleware = require('./authMiddleware');
const simpsonsUtils = require('./fs-utils');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

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

app.get('/simpsons/:id', async (req, res) => {
  const id = req.params.id;
  const simpsons = await simpsonsUtils.getSimpsons();

  const simpsonId = simpsons.find((simpson) => simpson.id === id);

  if(!simpsonId) return res.status(404).json({message: 'simpson not found'});

  return res.status(200).json(simpsonId);
})

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();

  const simpsonId = simpsons.find((simpson) => simpson.id === id);

  if(simpsonId) return res.status(409).json({message: 'id already exists'});
  
  simpsons.push({id, name});

  await simpsonsUtils.setSimpsons(simpsons)

  return res.status(204).end();
});

app.post('/singup', (req, res) => {
  const {email, password, firstname, phone} = req.body;

  if([email, password, firstname, phone].includes(undefined)) {
    return res.status(401).json({message: 'missing fields'});
  };

  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token })

});

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000);