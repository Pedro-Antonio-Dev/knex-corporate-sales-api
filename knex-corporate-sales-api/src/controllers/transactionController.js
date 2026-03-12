/* Controller para compra dos produtos */

/* Banco de dados PostgreSQL */
const db = require("../config/database")

const transactionController = {}

/* POST / */
transactionController.buy = async (req, res) => {

    try {
        
        const {product_id} = req.body

        const user_id = req.user.id

        const product = await db.query(
            "SELECT * FROM products WHERE id = $1",
            [product_id]
        )

        if(product.rows.length === 0) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        const transaction = await db.query(
            `INSERT INTO transactions (user_id, product_id)
            VALUES ($1, $2)
            RETURNING *`,
            [user_id, product_id]
        )

        res.status(201).json(transaction.rows[0])

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}

/* GET /purchases */
transactionController.myPurchases = async (req, res) => {

    try {

        const user_id = req.user.id

        const transactions = await db.query(
            `SELECT * FROM transactions WHERE user_id = $1
            ORDER BY created_at DESC`,
            [user_id]
        )

        res.json(transactions.rows)

    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })

    }

}

module.exports = transactionController