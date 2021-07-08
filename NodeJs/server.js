const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//inicando o BD
mongoose.connect(
     'mongodb://localhost:27017/nodeapi', 
     {userNewUrlParser: true}
);
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);