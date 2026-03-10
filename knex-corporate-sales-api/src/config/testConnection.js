const db = require("./database")

const testConnection = async () => {
    try {
        
        const result = await db.query("SELECT NOW()")

        console.log("Banco da Dados conectado")
        console.log(result.rows)

    } catch (error) {
        
        console,log("Erro ao conectar com o db")
        console.log(error)

    } finally {

        process.exit()

    }
}

testConnection()