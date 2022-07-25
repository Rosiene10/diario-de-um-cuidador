const controller = require('../controller/cuidadoraController')
const express = require('express')

const router = express.Router()

router.post("/", controller.criarCuidadora)
router.get("/",controller.buscarCuidadoras)
router.get("/:id",controller.buscarCuidadorPorId)
router.patch("/:id",controller.updateCuidadora)
router.delete("/:id",controller.deleteCuidadora)

module.exports = router