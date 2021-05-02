var http = require('http');
var fs = require('fs');
var url = require ('url')

http.createServer((req, res) =>{
    // let data =fs.readFileSync('demofile1.html')
    // fs.readFile('demofile1.html', function(err, data) {
    //     if (err) res.end()
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });
    const requestedURL = req.url
    var q = url.parse(requestedURL,true)
    console.log(q)
}).listen(8080);