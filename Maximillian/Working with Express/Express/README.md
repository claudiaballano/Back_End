
## Express

It's all about Middleware

Middleware : software that acts as a bridge between an operating system or database and applications, especially on a network.



app.use((req, res, next)=>{
    console.log('In the middle')
    next() // Allows the request to continue to the next middleware in line. 
}) 