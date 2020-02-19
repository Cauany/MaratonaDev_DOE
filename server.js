//Configurando o servidor
const express = require("express");
const server = express();

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

//configurar a conexão com o banco de dados
const Pool = require('pg').Pool
const db = new Pool({ 
    user: 'postgres',
    password: 'cicerasouza0708',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})



//Configurar a apresentação da página
server.get("/", function(req, res) {
    const donors = []
    return res.render("index.html", { donors })
})

server.post("/", function(req, res){
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
    
if (name == "" || email == "" || blood == ""){
    return res.send("Todos os campos são obrigatórios.")
    }

    //colocando valores dentro do banco de dados
    const query = `
    insert into donors (" name","email","blood") 
    values ('$1,$2,$3')`

    const values = [name, email, blood]

    db.query(query, values, function(err){
        //fluxo de erro
        if(err) return res.send("erro no banco de dados.")
        //fluxo ideal
        return res.redirect("/")
    })
})
//Ligando o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor")
})
