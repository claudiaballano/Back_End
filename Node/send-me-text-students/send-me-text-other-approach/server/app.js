// Your server here
const http = require('http');
const fs = require('fs');
const path = require('path');

const serv = http.createServer((req, res) => {
    const url = new URL(req.headers.host + req.url);

    if (req.method === 'GET' && req.url.split('?')[0] == '/sendtext') {

        const queryParams = url.searchParams;
        const filename = queryParams.get('filename');
        const content = queryParams.get('content');

        if (content.length > 1024) {
            res.writeHead(500);
            res.write('<h2>The content submitted is too long. Please, try again!</h2>');
            return res.end();
        }

        const filePath = path.join('..', 'files', filename);

        fs.appendFile(filePath + '.txt', content + '\n', err => {
            if (err) {
                throw new Error(err)
            }
            console.log('Data saved succesfully!');
        })

        res.writeHead(200);
    } else {
        res.writeHead(404,
            { 'Content-Type': 'text/html; charset=utf-8' }
        );
        res.write('<h2> ERROR 404. PAGE NOT FOUND</h2>');
        res.write('<p>Please check the address you have introduced!');
        res.end();
    }


})

serv.listen(3000)