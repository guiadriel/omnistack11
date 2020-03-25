const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

// É necessário informar qual é o tipo de requisições
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);