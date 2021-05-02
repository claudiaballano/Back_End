const express = require('express')
const app = express()


app.get('/mensaje',(req,res,next)=>{
   res.send('<h1>El servidor funciona correctamente</h1>')
})
app.use((req,res,next)=>{
   res.status(404).send('<h1>No he encontrado lo que buscabas...</h1>')
})
app.listen(3000)