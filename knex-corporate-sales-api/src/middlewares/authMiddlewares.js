/* middleware de autenticação */

/* Biblioteca JWT */
const jwt = require("jsonwebtoken")

const authMiddlewares = (req, res, next) => {

    try {
        
        const authHeader = req.headers.authorization // Envio do bearer tk

        if(!authHeader) {
            return res.status(401).json({
                message: "Token não fornecido"
            })
        }

        const token = authHeader.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (error) {
        
        return res.status(401).json({
            message: "Token Invalido"
        })

    }

}

module.exports = authMiddlewares