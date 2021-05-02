const express = require('express')
const app = express()
const path = require ('path')

app.get('/nacktschnecke',(req,res,next)=>{
   const ruta = path.join(__dirname, 'server3-files','nacktschnecke.html')
   res.sendFile(ruta)
})
app.get('/about',(req,res,next)=>{
   const ruta = path.join(__dirname, 'server3-files','about.html')
   console.log(ruta)
   res.sendFile(ruta)
})
app.use((req,res,next)=>{
   res.status(404).send('<h1>No he encontrado lo que buscabas...</h1>')
})
app.listen(3000)