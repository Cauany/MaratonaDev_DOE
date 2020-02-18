//Configurando o servidor
const express = require("express");
const server = express();

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//Configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html")
})


//Ligando o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor")
})
