

const http = require('http');
//requite() --> Is the wat you import files in node.js
// Http es un modulo que trae JS ya instalado 




const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    switch (req.url) {
        case "/messages":
            res.writeHead(200);
            res.write('<h1>El servidor funciona correctamente')
            res.write('<p>Aquí iría el contenido del mensaje</p>')
            res.end()
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }


    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('</html>')

    //Event loop: keeps on runings as long as the event is registered and never unregistered. 
    //process.exit() Para el servidor. 
    // console.log(re.url, req.method,req.headers)
})

server.listen(5000)

//IP local o de lookback
