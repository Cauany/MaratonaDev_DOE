//configurar a conexão com o banco de dados
const Pool = require('pg').Pool
const db = new Pool({ 
    user: 'postgres',
    password: 'cicerasouza0708',
    host: 'localhost',
    port: 5432,
    database: 'Doe'
})

module.exports = db