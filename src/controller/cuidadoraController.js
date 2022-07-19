const CuidadoraModel = require('../models/cuidadoraModel')
const criarCuidadora = async (req, res) => {
   try {
      const { nome,cpf,contato}=req.body
      const novaCuidadora = new CuidadoraModel({
        nome,cpf, contato
    })

      const salvarCuidadora = await novaCuidadora.save()

      res.status(201).json(salvarCuidadora)
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

const buscarCuidadoras = async (req, res) => {
  try {
    const cuidadoras = await CuidadoraModel.find()
    res.status(200).json(cuidadoras)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

module.exports =  {
    criarCuidadora,
    buscarCuidadoras
  }