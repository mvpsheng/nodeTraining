let http = require('http');
let url = require('url');
let util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    
    let params = url.parse(req.url, true).query;
    res.write("网站名： " + params.name);
    res.write("\n");
    res.write("网站 URL： " + params.url);

    res.end();
}).listen(3000);