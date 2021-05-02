const express = require ('express')

const app = express()




//Configuro express para que utiliza el sistema de renderización

app.set ('view engine', 'ejs')

const infoEmpresa = {
    empresa: 'You&Ice',
    añoFundacion: 2010,
    nosDebeDinero : true,
    serviciosContratados:['magnum','cornetto','xocolate']
}

app.get('/', (req,res)=>{
    // res.send('El servidor funciona')
    
    res.render('index', infoEmpresa)
})

app.get('/about', (req,res)=>{
    // res.send('El servidor funciona')
    res.render('about', infoEmpresa)
})

app.listen(3000)

