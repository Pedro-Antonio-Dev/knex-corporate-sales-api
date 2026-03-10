/* app principal */
const express = require("express")

/* Rotas centralizadas */
const routes = require("./routes/router")

const app = express()

app.use(express.json())
app.use(routes)

module.exports = app