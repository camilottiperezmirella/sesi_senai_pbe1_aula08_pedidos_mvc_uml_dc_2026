const express = require("express")
const router = express.Router()

const Cliente = require ("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/',rotaInicial)
router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)

module.exports = router