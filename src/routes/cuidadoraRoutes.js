const controller = require('../controller/cuidadoraController')
const express = require('express')

const router = express.Router()

router.post("/", controller.criarCuidadora)
router.get("/",controller.buscarCuidadoras)
router.get("/:id",controller.buscarCuidadorPorId)

module.exports = router