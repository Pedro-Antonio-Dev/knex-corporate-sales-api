/* Rotas dos Produtos */
const express = require("express")

const router = express.Router()

/* Controller para produtos */
const productController = require("../controllers/productController")

/* Middleware da Regra de Negocio */
const authMiddleware = require("../middlewares/authMiddlewares")

/* GET Listar Produtos */
router.get("/", authMiddleware, productController.list)
/* GET Pegar Produto Específico */
router.get("/:id", authMiddleware, productController.getById)
/* POST Cadastrar Produto */
router.post("/", authMiddleware, productController.create)
/* PUT Editar Produto */
router.put("/:id", authMiddleware, productController.update)
/* DELETE Excluir Produto */
router.delete("/:id", authMiddleware, productController.remove)

module.exports = router