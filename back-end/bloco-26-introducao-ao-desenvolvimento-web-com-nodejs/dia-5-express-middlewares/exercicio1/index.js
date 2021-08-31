const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routers/userRouter');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.post('/user/register', validateParams, (req, res) => {
  res.status(201).json({message: 'user created'})
});

app.listen(3000, () => console.log('Run server http://localhost:3000'));