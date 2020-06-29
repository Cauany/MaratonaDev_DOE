//Configurando o servidor
const express = require("express");
const server = express();
const routes = require('./routes')

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//habilitar body do formulário
server.use(express.urlencoded({ extended: true }))
//Chamando as rotas
server.use(routes)

module.exports = server