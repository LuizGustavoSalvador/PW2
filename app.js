var http = require('http');

http.createServer((req, res) => {
  res.end('ola brother');
}).listen(9090); //create server cria um servidor pra trabalhar no back e listen para setar a porta

console.log('Servidor rodando lisin!');