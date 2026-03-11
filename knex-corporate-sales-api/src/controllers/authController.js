/* Controle para Registro e Login */

/* Criptografia de senha e token */
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/* Banco de dados PostgreSQL */
const db = require("../config/database")

/* Controle de autenticação */
const authController = {}

/* POST /register */
authController.register = async (req, res) => {
    
    try {
        
        const {name, email, password, company_id} = req.body

        const user = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        if(user.rows.length > 0) {
            return res.status(400).json({
                message: "O Usuario já existe no banco de dados"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await db.query(
            `INSERT INTO users (name, email, password, company_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [name, email, hashedPassword, company_id || null]
        )

        res.status(201).json(newUser.rows[0])

        console.log("Foi")

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = authController