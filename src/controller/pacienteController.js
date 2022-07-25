const PacienteModel = require('../models/pacienteModel')
const criarPaciente = async (req, res) => {
   try {
      const { nome,cpf, cuidadora,medicacao, banho,refeicao,limpezaDeDispositivo, trocaDeCurativo, ultimaCuidadora,obs } = req.body

      const novoPaciente = new PacienteModel({
        nome, cpf, cuidadora, medicacao, banho, refeicao, limpezaDeDispositivo, trocaDeCurativo, ultimaCuidadora,obs
      })

      const salvarPaciente = await novoPaciente.save()

      res.status(201).json(salvarPaciente)
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

const buscarPacientes = async (req, res) => {
  try {
    const pacientes = await PacienteModel.find()
    res.status(200).json(pacientes)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

const buscarPacientePorId = async (req, res) => {
  try {
    const buscarPaciente = await PacienteModel.findById(req.params.id)
    res.status(200).json(buscarPaciente)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updatePaciente = async (req, res) => {
  try {
    const { nome, cpf, cuidadora, medicacao, banho, refeicao, limpezaDeDispositivo, trocaDeCurativo, ultimaCuidadora,obs } = req.body
    const updatedPaciente = await PacienteModel
    .findByIdAndUpdate(req.params.id, {
      nome, cpf, cuidadora, medicacao, banho, refeicao, limpezaDeDispositivo, trocaDeCurativo, ultimaCuidadora,obs
    })
    const updated = await PacienteModel
    .findById(req.params.id)

    res.status(200).json(updated)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
const deletePaciente = async (req, res) => {
  try {
      const { id } = req.params
      const deletedPaciente = await PacienteModel.findByIdAndDelete(id) 
      const message = `Paciente  ${deletedPaciente.nome} foi deletado com sucesso!`
     res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}


module.exports =  {
    criarPaciente,
    buscarPacientes,
    buscarPacientePorId,
    updatePaciente,
    deletePaciente

  }