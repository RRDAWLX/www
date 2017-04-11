let http = require('http');

http.createServer(function(req, res){
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        console.log('parsed', chunk);
    });

    req.on('end', function(){
        console.log('done parsing');
        res.setHeader('Content-Type', 'text/plain');
        // res.setHeader('Location', "http://www.vip.com");
        // res.statusCode = 302;
        res.end('hello kitty!');
    });
}).listen(5555);

console.log('listening 5555');
