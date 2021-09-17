//configurar a conexão com o banco de dados
const { Pool } = require('pg')

// const db = new Pool({ 
//     user: 'postgres',
//     password: 'cicerasouza0708',
//     host: 'localhost',
//     port: 5432,
//     database: 'Doe'
// })

const url = 'postgres://znbwhhivtddpkm:dc7151cbb63bf9eee229bb6c0882a8ff552bd0ce3aadfc4d6d16d1232498c8fc@ec2-52-2-118-38.compute-1.amazonaws.com:5432/ddo5hvi6b1l235'

module.exports = new Pool({
  connectionString: url,
  ssl: { rejectUnauthorized: false },
})