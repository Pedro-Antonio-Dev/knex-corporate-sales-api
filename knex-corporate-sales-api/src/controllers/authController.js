/* Controller para Registro e Login */

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

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

/* POST /login */
authController.login = async (req, res) => {

    try {

        const {email, password} = req.body

        const user = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        if(user.rows.length === 0) {
            return res.status(404).json({
                message: "Não há usuario cadastrado com esse email"
            })
        }

        const foundUser = user.rows[0]

        const validPassword = await bcrypt.compare(
            password,
            foundUser.password
        )
        
        if(!validPassword) {
            return res.status(404).json({
                message: "Senha inválida"
            })
        }

        const token = jwt.sign(
            {
                id: foundUser.id,
                email: foundUser.email,
                company_id: foundUser.company_id
            },
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        res.json({
            message: "Login realizado com sucesso",
            token
        })

    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })

    }

}

module.exports = authController