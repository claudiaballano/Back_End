//Crear costum module que ofrezca los mecanismos para conectarse a la base de datos

//La posibilidad de recuperar la conexión a base de datos para realizar operaciones

const MongoClient = require('mongodb').MongoClient

let _db;

const uri ="mongodb+srv://root:root@cluster0.kpgip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

exports.mongoConnect = async (uri, cb) => {
    const connect = await MongoClient.connect(uri)
    _db=connect.db('fototeca')
    cb()
}

exports.getDB =()=>{
    return _db
}

