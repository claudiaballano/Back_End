const mongoose = require ('mongoose')

//Vamos a definir el schema de los que representa para nosotros un mensaje. Dicho de otro modo, como se representa un 'message' en nuestra app. 

const messageSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    content:     { type: String, required:true },
    type:   { type: String, required:true, enum: ['1', '2', '3'],}
})

//Vamos a asociar ese esquema  aun modelo ( y por ende, a una colección de MongoDB)

const Message = mongoose.model('Message', messageSchema)

//Exportaremos el esquema para que el controlador pueda crear documentos y/o realizar búsquedas en la BBDD

module.exports= Message 
