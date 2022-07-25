const controller = require('../controller/cuidadoraController')
const express = require('express')

const router = express.Router()

router.post("/", controller.criarCuidadora)
router.get("/",controller.buscarCuidadoras)
router.get("/:id",controller.buscarCuidadorPorId)
router.patch("/:id",controller.updateCuidadora)

module.exports = router