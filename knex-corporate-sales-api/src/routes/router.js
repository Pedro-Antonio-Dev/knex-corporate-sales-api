/* Arquivo central para todas as rotas */
const express = require("express")

/* Importação das rotas */
const authRoute = require("./authRoute")
//const productRoute = require("./productRoute")
//const transactionRoute = require("./transactionRoute")

const router = express.Router()

/* Rotas */
router.use("/auth", authRoute)
//router.use("/products", productRoute)
//router.use("/transaction", transactionRoute)

module.exports = router