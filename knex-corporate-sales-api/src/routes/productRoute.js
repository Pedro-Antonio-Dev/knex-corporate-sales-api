/* Rotas dos Produtos */
const express = require("express")

const router = express.Router()

/* Controller para produtos */
const productController = require("../controllers/productController")

/* Middleware da Regra de Negocio */
const authMiddlewares = require("../middlewares/authMiddlewares")

/* GET Listar Produtos */
router.get("/", authMiddlewares, productController.list)
/* GET Pegar Produto Específico */
router.get("/:id", authMiddlewares, productController.getById)
/* POST Cadastrar Produto */
router.post("/", authMiddlewares, productController.create)
/* PUT Editar Produto */
router.put("/:id", authMiddlewares, productController.update)
/* DELETE Excluir Produto */
router.delete("/:id", authMiddlewares, productController.remove)

module.exports = router