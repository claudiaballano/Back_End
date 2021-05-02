const express = require('express')
const app = express()

const checkPalindrome = require ('./utils/palindrome/index')

app.get('/check/:id',(req,res,next)=>{


  if(checkPalindrome.palindrome(req.params.id)){
     return res.send('<h1>Es palindrome</h1>')
  }
  return res.send('<h1>No es palindrome</h1>')
   
})
app.use((req,res,next)=>{
   res.status(404).send('<h1>No he encontrado lo que buscabas...</h1>')
})
app.listen(3000)