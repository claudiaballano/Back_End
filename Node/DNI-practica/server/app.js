// aquí tu servidor
// Debe recibir peticiones al endpoint '/comprobarDNI'
// Devuelve un error 404 en cualquier otro caso
// El servidor debe procesar los parámetros de la QueryString. Mirad otros ejemplos de como hacerlo en ejercicios anteriores.

const http = require('http')
const querystring = require('querystring');
const DNI = require('./DNI')

http.createServer((req, res) => {

    if (req.method != 'GET' && req.url.split('?')[0] != '/comprobarDNI') {
        res.writeHead(404, headers)
        return res.end();
    }
    console.log('peticion recibida:' + req.url)

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
    };
    res.writeHead(200, headers)

    let myQueryString=req.url.split('?')[1]

    const query = querystring.parse(myQueryString);

    const nuevoDNI = new DNI("Test", `${query.DNInumber}`, `${query.caducidad}`)

    const esDniValido = nuevoDNI.esDniValido()
    const esCriminalBuscado = nuevoDNI.esCriminalBuscado()
    

    res.end(JSON.stringify({
        esDniValido: esDniValido,
        esCriminalBuscado: esCriminalBuscado
    }));
    return;
    
}).listen(3000)

