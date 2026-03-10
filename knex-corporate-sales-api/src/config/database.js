/* Conexão com o Postgre (Banco de Dados) */
const {Pool} = require("pg")

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "0409",
    database: "corporate_sales"
})

module.exports = pool // Pool de conexões com o db