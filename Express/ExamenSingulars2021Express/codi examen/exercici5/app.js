const express = require('express');
const bodyParser = require('body-parser');
const dniValidator = require('spain-id');
const path = require('path');

const app = express();

console.log('Funciones de este módulo:', dniValidator);


app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "formulario.html"));
})

app.post('/', (req, res) => {

    const dni = req.body.DNI;
    console.log(dni)
    
    if (dniValidator.validDNI(dni))
    {
        res.send("El número de identificación es válido");
    }

    else {
        res.send("El número de identificación <strong>NO</strong> es válido");
    }
})



app.listen(3000);