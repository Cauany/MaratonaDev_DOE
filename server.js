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

//configurando a lista de doadores: Vetor ou Array
const donors = [
    {
        name: "Diego Fernades",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "A+"
    },
    {
        name: "Mayk Brito",
        blood: "O+"
    }
]



//Configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})


//Ligando o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor")
})
