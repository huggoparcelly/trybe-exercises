const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const {validateToken} = require('./middlewares/validations');

const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/btc', validateToken, 
  async (req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);

    res.status(200).json(result.data);
  }
)

app.listen(3000, () => console.log('Run server http://localhost:3000'));