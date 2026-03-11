/* Rota de Autenticação */
const express = require("express")

const router = express.Router()

/* Controller para as autenticações */
const authController = require("../controllers/authController")

/* Rota de Registro */
router.post("/register", authController.register)

/* Rota de Login */
//router.post("/login", authController.login)

module.exports = router