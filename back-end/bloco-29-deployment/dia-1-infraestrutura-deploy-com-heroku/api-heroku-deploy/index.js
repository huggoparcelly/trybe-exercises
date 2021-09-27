const express = require('express');

const app = express();

const SERVER_API = process.env.SERVER_API || 'Não foi possível!'

app.get('/', (req, res) => {
  res.send(`Está no ambiente de ${SERVER_API}`)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));
