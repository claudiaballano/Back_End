

const http = require('http');


const server= http.createServer((req,res)=>{
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    console.log('Estás en el lado del servidor')
    res.writeHead(200)
    res.write('<h1>El servidor funciona correctamente')
    res.write('<p>Aquí iría el contenido del mensaje</p>')
    res.end()
    
})

server.listen(5000)
