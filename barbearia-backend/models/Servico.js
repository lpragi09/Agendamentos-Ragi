const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  duracao_minutos: Number,
});

const Servico = mongoose.model('Servico', servicoSchema);

module.exports = Servico;