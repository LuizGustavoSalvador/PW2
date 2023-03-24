const express  = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // para poder compartilhar dados entre dominios sem ser bloqueado
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express(); //cria uma cópia do framework para const app (pode usar tudo do express)
const port = 9090;

mongoose.connect('mongodb://localhost:27017/dadosTeste', {
  useUnifiedTopology: true, // configurações padrão
  useNewUrlParser: true,
}); // conexão com o meu banco de dados mongo

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function(){
  console.log('server is running')
});  // essa linha SEMPRE tem que ser a última do código