const express = require ('express')
const app = express ()


const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended:false}))


//Routes
const catsRoutes = require ('./routes/cats')



app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
    res.send('Bienvenido a la página de PROGATS')
})

app.use('/cats', catsRoutes )


app.listen(3000)