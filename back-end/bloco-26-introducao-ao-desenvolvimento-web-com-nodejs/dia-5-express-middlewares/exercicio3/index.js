const express = require('express');
const bodyParser = require('body-parser');

const postRouter = require('./routers/postRouter');
const errors = require('./middlewares/routerNotFound');


const app = express();
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(3000, () => console.log('Run server http://localhost:3000'));