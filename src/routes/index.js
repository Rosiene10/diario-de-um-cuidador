
const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Diario de um Cuidador",
    version: "1.0.0"
  })
})

module.exports = router