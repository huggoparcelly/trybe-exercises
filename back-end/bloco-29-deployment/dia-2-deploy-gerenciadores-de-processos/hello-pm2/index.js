const express = require('express');

const app = express();

const ENVIRONMENT = process.env.ENVIRONMENT || "Não foi encontrado :/"

app.get('/', (req, res) => {
  res.send(`Estamos no ambiente ${ENVIRONMENT}`)
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));