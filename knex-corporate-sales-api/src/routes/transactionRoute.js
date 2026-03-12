/* Rotas para as transações (compra dos produtos) */
const express = require("express")

const router = express.Router()

/* Controller para transações */
const transactionController = require("../controllers/transactionController")

/* Middleware para validar transações */
const authMiddlewares = require("../middlewares/authMiddlewares")

/* POST comprar */
router.post("/", transactionController.buy)

/* GET ver compras */
router.get("/purchases", transactionController.myPurchases)

module.exports = router