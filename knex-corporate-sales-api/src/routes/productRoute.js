/*
/* Rotas dos Produtos */
const express = require("express")

const router = express.Router()

/* Controller para produtos */
const productController = require("../controllers/productController")

/* Middleware da Regra de Negocio */
const authMiddlewares = require("../middlewares/authMiddlewares")

/* GET Listar Produtos */
router.get("/", productController.list)
/* GET Pegar Produto Específico */
router.get("/:id", productController.getById)
/* POST Cadastrar Produto */
router.post("/", productController.create)
/* PUT Editar Produto */
router.put("/:id", productController.update)
/* DELETE Excluir Produto */
router.delete("/:id" ,productController.remove)

module.exports = router