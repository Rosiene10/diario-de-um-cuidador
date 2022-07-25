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
const buscarCuidadorPorId = async (req, res) => {
  try {
    const buscarCuidadora = await CuidadoraModel.findById(req.params.id)
    if(!buscarCuidadora){
      return res.status(401).json({
        message:"id nao encontrado"
      })
    }
    res.status(200).json(buscarCuidadora)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateCuidadora= async (req, res) => {
  try {
    const {  nome,cpf, contato } = req.body
    const updatedCuidadora = await CuidadoraModel
    .findByIdAndUpdate(req.params.id, {
     nome,cpf, contato
    })

    if(!updatedCuidadora){
      return res.status(401).json({
        message:"id nao encontrado"
      })
    }
    const updated = await CuidadoraModel
    .findById(req.params.id)

    res.status(200).json(updated)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteCuidadora = async (req, res) => {
  try {
      const { id } = req.params
      const deletedCuidadora = await CuidadoraModel.findByIdAndDelete(id) 
      if(!deletedCuidadora){
        return res.status(401).json({
          message:"id nao encontrado"
        })
      }
      const message = `Cuidadora  ${deletedCuidadora.nome} foi deletada com sucesso!`
     res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

module.exports =  {
    criarCuidadora,
    buscarCuidadoras,
    buscarCuidadorPorId,
    updateCuidadora,
    deleteCuidadora


  
  }