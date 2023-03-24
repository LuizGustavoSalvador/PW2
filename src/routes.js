const express = require('express');
const path = require('path');
const UserController = require('./controller/UserController');
const routes = express.Router();

routes.get('/', function(req, res){
  res.json({
    message: "Bem vindo meu bom"
  });
});

routes.get('/user', UserController.index);

module.exports = routes;

// module.exports = function(app){
//   app.get('/', function(req, res){
//     res.sendFile(path.dirname(__dirname)+'/index.html');
//   });
  
//   app.get('/sobre', function(req, res){
//     res.send('my page sobre bro');
//   })

//   app.get('/test/:nome/:sobrenome', function(req, res){
//     res.send('ola '+ req.params.nome+'sobrenome '+ req.params.sobrenome+'!!!'); // só pode ser enviado 1 send
//   });
// }