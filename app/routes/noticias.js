module.exports = function(app){

    app.get('/noticias', function(req, res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'vcri007.',
            database : 'portal_noticias'
        });

        connection.query('select * from noticias', function(err, result){
            console.log(result);
            console.log(err);
            res.send(result);
        });

        //connection.query('select * from noticias', function(error, result){
        //        res.render("noticias/noticias", {noticias : result});
        //    });
    });
};