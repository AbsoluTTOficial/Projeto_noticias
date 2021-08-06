var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com bd foi estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'vcri007.',
        database : 'portal_noticias'
    });
}

module.exports = function () {
    console.log('O autoload carregou o modulo de conexão com bd');
    return connMySQL;
}