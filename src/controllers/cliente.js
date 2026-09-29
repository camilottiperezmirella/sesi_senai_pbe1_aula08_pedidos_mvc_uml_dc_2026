const clientes = require("../../dados/clientes.json")

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
}
const listar = (req, res) => { }
     res.json(clientes)

const alterar = (req, res) =>{ }
const excluir = (req, res) => { }

module.esports = {
    criar, listar, alterar, excluir
}