/* Servidor */

const app = require("./knex-corporate-sales-api/src/app")

const PORT = 3000

app.listen(PORT, () => {
    console.log("Server Rodando")
})