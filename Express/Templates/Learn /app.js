const express=require('express');

const app=express();
// app.use(bodyParser.urlencoded({extended:false}))
const fs=require('fs');
fs.readFile('dades.txt', (err,data)=>{console.log(data.toString());});
console.log("Ja he acabat!");
app.listen(3000);