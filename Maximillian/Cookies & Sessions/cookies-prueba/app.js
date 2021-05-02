const express = require ('express')
const app = express ()


const bodyParser = require ('body-parser')


//deprecated
app.use(bodyParser.urlencoded({extended:false}))



app.use(express.json())

const galleryRoutes = require ('./routes/gallery')
const authRoutes = require ('./routes/auth')

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
    res.redirect('/gallery')
})

app.use('/gallery', galleryRoutes )
app.use(authRoutes)



app.listen(3000)