// Your server here

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    
    // Different approach
    // const url = new URL(req.headers.host + req.url);
    // const queryParams = url.searchParams;
    //     const filename = queryParams.get('filename');
    //     const content = queryParams.get('content');


    // Deprecated
    // const parsed = url.parse(req.url);

    if (req.method === 'GET' && req.url.split('?')[0]=='/sendtext') {
        res.writeHead(200);

        let myQueryString=req.url.split('?')[1]

        const query = querystring.parse(myQueryString);
        
        if(query.content.length<1024){
            let file = path.join('files', `${query.filename}.txt`);
            console.log(file)
            fs.appendFile(file, query.content, function(err) {
                if(err) console.log(err);
                console.log("The file was saved!");
            }); 
            return
        }
        res.writeHead(500);
        res.write('<h1>Datos demasiado largos</h1>')
        res.end();
    } 
    else {
        res.writeHead(404);
        res.write('<h1>Not Found</h1>')
        res.end();
    }

})

server.listen(3000)
