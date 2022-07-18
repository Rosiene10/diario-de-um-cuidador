const mongoose = require('mongoose')

const cuidadoraSchema = mongoose.Schema({
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
  contato: {
    type: Array,
    required: true
  }
}, { timestamps: true }) 

const Model = mongoose.model('cuidadora', cuidadoraSchema)

module.exports = Model