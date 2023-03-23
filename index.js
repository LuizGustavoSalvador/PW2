var express  = require('express');
const app = express(); //cria uma cópia do framework para const app (pode usar tudo do express)
require('./backend/routes')(app);


app.listen(9090, function(){
  console.log('server is running')
});  // essa linha SEMPRE tem que ser a última do código