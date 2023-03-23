const path = require('path');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(path.dirname(__dirname)+'/index.html');
  });
  
  app.get('/sobre', function(req, res){
    res.send('my page sobre bro');
  })

  app.get('/test/:nome/:sobrenome', function(req, res){
    res.send('ola '+ req.params.nome+'sobrenome '+ req.params.sobrenome+'!!!'); // só pode ser enviado 1 send
  });
}