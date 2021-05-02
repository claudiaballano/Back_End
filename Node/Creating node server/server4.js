


const http = require('http');
const palindrome = require ('./utils/palindrome')
var url  = require('url');



const server = http.createServer((req, res) => {
    const url=req.url.split("/")
    if(url[1]=='check'){
        if (palindrome(url[2])) {
            res.writeHead(200);
            res.write('<h1>Palindromo</h1>')
            res.end();
        }else {
            res.writeHead(200);
            res.write('<h1>No palindromo</h1>')
            res.end();
        }
    }
    
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Resource not found" }));
    }
        
})

server.listen(5000)

