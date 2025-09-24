const mongoose = require('mongoose');

const profissionalSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true // O nome é obrigatório
  },
  descricao: {
    type: String // Uma descrição/especialidade opcional
  },
  // Este objeto vai guardar os horários de trabalho para cada dia da semana
  horariosTrabalho: {
    seg: { inicio: String, fim: String },
    ter: { inicio: String, fim: String },
    qua: { inicio: String, fim: String },
    qui: { inicio: String, fim: String },
    sex: { inicio: String, fim: String },
    sab: { inicio: String, fim: String },
    dom: { inicio: String, fim: String }
  }
});

const Profissional = mongoose.model('Profissional', profissionalSchema);

module.exports = Profissional;