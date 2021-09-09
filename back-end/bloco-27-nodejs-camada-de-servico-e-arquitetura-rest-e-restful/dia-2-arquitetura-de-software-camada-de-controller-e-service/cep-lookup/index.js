const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// app.get('/ping', async (req, res) => {
//   res.status(200).json({message: "pong!"})
// });

const cepController = require('./controllers/cepController');

app.use('/cep', cepController)

const PORT = 3000;
app.listen(PORT, () => console.log(`Online na porta ${PORT}`));