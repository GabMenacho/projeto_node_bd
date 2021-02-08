const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "localhost",
    user:"root",
    pasword:"",
    database:"uma_store"
})/*O código acima já criou a conexão com o banco do projeto fullstack */

module.exports = connect