/* Controller para o CRUD de produtos */

/* Banco de dados PostgreSQL */
const db = require("../config/database")

const productController = {}

/* GET /products */
productController.list = async (req, res) => {

    try {
        
        const products = await db.query(
            "SELECT * FROM products"
        )

        res.json(products.rows)

    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })

    }
}

/* GET /products/:id */
productController.getById = async (req, res) => {

    try {
        
        const {id} = req.params

        const product = await db.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        )

        if(product.rows.length === 0) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        res.json(product.rows)

    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })
    }

}

/* POST /products */
productController.create = async (req, res) => {

    try {
        
        const {name, price, company_id} = req.body

        const newProduct = await db.query(
            `INSERT INTO products (name, price, company_id)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [name, price, company_id]
        )

        res.status(201).json(newProduct.rows[0])

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

/* PUT /products/:id */
productController.update = async (req, res) => {

    try {

        const {id} = req.params
        const {name, price} = req.body

        const updatedProduct = await db.query(
            `UPDATE products
            SET name = $1, price = $2
            WHERE id = $3
            RETURNING *`,
            [name, price, id]
        )

        if(updatedProduct.rows.length === 0) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        res.json(updatedProduct.rows[0])
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

/* DELETE /products/:id */
productController.remove = async (req, res) => {

    try {

        const {id} = req.params

        const deletedProduct = await db.query(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            [id]
        )

        if(deletedProduct.rows.length === 0) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        res.json({
            message: "Produto deletado com sucesso"
        })
        
    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })

    }

}

module.exports = productController