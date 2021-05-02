const express = require('express')
const app = express()


app.use((req,res,next)=>{
   res.send('<h1>El servidor funciona correctamente</h1>')
})
app.listen(3000)