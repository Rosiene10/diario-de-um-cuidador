require("dotenv").config()
const express=require("express")
const cors=require("cors")
const index = require("./routes/index")
const app=express()
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

app.use(express.json())
app.use(cors())
app.use("/", index);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));




module.exports = app