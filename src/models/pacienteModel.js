const mongoose = require('mongoose')

const pacienteSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

 nome: {
    type: String,
    required: true
  },
 cpf: {
    type: String,
    required: true
  },
  cuidadoras: {
    type: Array,
    required: true
  },
  medicacao: {
    type: String,
  },
  banho: {
    type: String,
    required: true
  },
refeicao: {
    type: String,
    required: true
  },
limpesaDeDispositivo: {
    type: String,
    required: true
  },
trocaDeCurativo: {
    type: String,
    required: true
  },
ultimaCuidadora: {
    type: String,
    required: true
  },
obs: {
    type: String,
    required: true
  }

}, { timestamps: true }) 

const Model = mongoose.model('paciente', pacienteSchema)

module.exports = Model