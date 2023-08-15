// Create web server
var server = http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data){
        if(error){
            res.writeHead(404);
            res.write('404');
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        }
    };
    switch(path){
        case '/':
            fs.readFile(__dirname + '/index.html', fsCallback);
            break;
        case '/about':
            fs.readFile(__dirname + '/about.html', fsCallback);
            break;
        default:
            res.writeHead(404);
            res.write('404');
            res.end();
    }
});

server.listen(8000);
console.log('Server is listening on port 8000');