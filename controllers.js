const db = require('./db')

//Função para selecionar toda a tabela Donors no banco de dados e Mostrar em tela.
exports.showDonors = function(req, res) {
    //pegando os dados do banco de dados e apresentando na tela
    db.query("select * from donors order by id desc limit 4", function(err, result){
        if(err) return res.send("Erro ao chamar tabela")

        const donors = result.rows
        return res.render("index.html", { donors })
    })
}

//Função para criar um novo doador
exports.createDonors = function(req, res){
    //pegar dados do formulário
    const nome = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //Usando o insert into para inserir os devidos dados na tabela
    const query = `insert into donors ("nome","email","blood") values ($1,$2,$3)`
    
    //
    const values = [nome, email, blood]

    db.query(query, values, function(err){
        //fluxo de erro
        if(err) return res.send("erro no banco de dados.")
        //fluxo ideal
        return res.redirect("/")
    })
}