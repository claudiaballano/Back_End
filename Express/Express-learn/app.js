const express = require('express')
const path = require ('path')

const app = express()


app.get('/servidor', (req, res, next) => {
    res.send(`servidor`)
});

app.get('/sendoc', (req, res, next) => {
    const ruta =path.join(__dirname, 'index.html')
    res.sendFile(ruta)
});
app.get('/sendata', (req, res, next) => {

    const nombre = req.query.nombre
    const apellidos = req.query.apellidos
    
    if(!nombre || !apellidos){
        return res.status(500).send('Falta alguno de los dos campos')
    }
    
    res.send(`${nombre}, ${apellidos}`)
    //Permite enviar qualquier tipo de dato al cliente

});
app.use((req, res) => {
    res.status(404).send('Página recurso no encontrado...')
})

app.get('/inmueble/:operación/:idInmueble',(req, res) => {
    res.status(404).send(`Esta es la información para el inmueble ${req.params}`)

    // if(req.params.operación=='ver')
})

app.use(express.static('public'))
//ofrecer de manera transparente al cliente los recursos get 

app.listen(3000)