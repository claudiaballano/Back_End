

const http = require('http');
//requite() --> Is the wat you import files in node.js
// Http es un modulo que trae JS ya instalado 




const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    switch (req.url) {
        case "/about":
            res.writeHead(200);
            res.write('<h1>Soon we will see how we can add in templating, SASS, routing, middleware, URL parsing, and a host of other features that will make our life more enjoyable</h1>')
            res.end()
            break
        case "/nacktschnecke":
            res.writeHead(200);
            res.write('<h1>If all this sounds crazy low level to you, that\'s because it it. The philosophy of Node is that you bolt together lots of small parts to build the product you want.</h1>')
            res.end();
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }

})

server.listen(3000)

