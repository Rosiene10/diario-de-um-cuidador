require("dotenv").config()
const express=require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app