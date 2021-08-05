var mysql = require('mysql');

module.exports = function () {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'vcri007.',
            database : 'portal_noticias'
        });
}