var http = require('http');

var server = http.createServer(function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body><h1>Noticias de Tecnologia</h1></body></html>");

    } else if (categoria == '/moda'){
        res.end("<html><body><h1>Noticias de Moda</h1></body></html>");
        
    } else if (categoria == '/beleza'){
        res.end("<html><body><h1>Noticias de Beleza</h1></body></html>");

    } else {
        res.end("<html><body><h1>Portal de noticias</h1></body></html>");

    }
    
})

server.listen(3000);