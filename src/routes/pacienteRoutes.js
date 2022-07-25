const controller = require('../controller/pacienteController')
const express = require('express')

const router = express.Router()

router.post("/", controller.criarPaciente)
router.get("/",controller.buscarPacientes)
router.get("/:id",controller.buscarPacientePorId)
router.patch("/:id",controller.updatePaciente)
module.exports = router