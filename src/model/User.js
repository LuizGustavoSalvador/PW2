const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome: String,
  senha: String,
});

const user = mongoose.model('User', DataSchema);
module.exports = user;