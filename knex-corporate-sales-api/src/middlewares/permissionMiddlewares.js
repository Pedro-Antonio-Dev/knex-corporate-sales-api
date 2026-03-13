/* Middleware para gerenciar a Regra de Negocio do CASE */

/* Banco de dados Postgree */
const db = require("../config/database")

const permissionMiddlewares = async (req, res, next) => {

    try {
        
        const {id} = req.params
        const userCompanyId = req.user.company_id

        const product = await db.query(
            "SELECT company_id FROM products WHERE id = $1",
            [id]
        )

        if(product.rows.length === 0) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        const productCompanyId = product.rows[0].company_id

        if(productCompanyId !== userCompanyId) {
            return res.status(403).json({
                message: "Você não tem autorização para alterar esse produto"
            })
        }

        next()

    } catch (error) {
        
        res.status(500).json({
            error: error.message
        })

    }

}

module.exports = permissionMiddlewares