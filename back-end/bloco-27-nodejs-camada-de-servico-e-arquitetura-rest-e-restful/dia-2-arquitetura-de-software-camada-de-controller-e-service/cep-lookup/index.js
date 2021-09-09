require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/error.js');

const app = express();
app.use(bodyParser.json());

app.get('/ping', async (req, res) => {
  res.status(200).json({message: "pong!"})
});

app.get('/cep/:cep', cepController.findAddressByCep);
app.post('/cep', cepController.createAddress);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Online na porta ${PORT}`));