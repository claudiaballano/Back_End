const express = require('express')
const app = express()

const isPalindrome = require('is-palindrome');

app.get('/check',(req,res,next)=>{
   const palabra = req.query.palabra
   
  if(isPalindrome(palabra)){
     return res.send('<h1>Es palindrome</h1>')
  }
  return res.send('<h1>No es palindrome</h1>')
   
})
app.use((req,res,next)=>{
   res.status(404).send('<h1>No he encontrado lo que buscabas...</h1>')
})
app.listen(3000)