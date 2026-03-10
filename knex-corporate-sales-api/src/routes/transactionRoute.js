/* Rotas para as transações (compra dos produtos) */
const express = require("express")

const router = express.Router()

/* Controller para transações */
const transactionController = require("../controllers/transactionController")

/* Middleware para validar transações */
const authMiddlewares = require("../middlewares/authMiddlewares")

/* POST comprar */
router.post("/", authMiddlewares, transactionController.buy)

/* GET ver compras */
router.get("/my", authMiddlewares, transactionController.MyTransactions)

module.exports = router