const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'pong'});
});

app.post('/hello', (req, res) => {
  const {name} = req.body;
  res.status(201).json({message: `Hello, ${name}`});
});

app.listen(3000);