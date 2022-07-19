const controller = require('../controller/pacienteController')
const express = require('express')

const router = express.Router()

router.post("/", controller.criarPaciente)
router.get("/",controller.buscarPacientes)

module.exports = router