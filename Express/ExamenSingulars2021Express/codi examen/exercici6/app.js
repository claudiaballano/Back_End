const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// https://www.npmjs.com/package/is-odd
const esNumeroImpar = require('is-odd');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});


let esImpar;
let numero;

app.post('/', (req, res) => {
    esImpar = esNumeroImpar(req.body.numero);
    numero=req.body.numero
    res.redirect('/index');
});

app.get('/index', function(req, res) {
    res.render('index', {
        numero: numero,
        impar: esImpar});
    
});

app.listen(3000);