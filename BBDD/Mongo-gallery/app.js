// Express modules
const express = require('express');

// Modulo para gestionar la conexión
const database = require('./util/database')

const uri = "mongodb+srv://root:root@cluster0.kpgip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
// Custom modules
const imageRoutes = require('./routes/images');

// Server variables
const app = express();
app.set('view engine', 'ejs');

// Add middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(imageRoutes);

// Primero tenemos que conectarnos correctamente a la base de datos. Después, ya podemos empezar a escuchar por el puerto 3000
database.mongoConnect(uri, 'fototeca', ()=> {
    app.listen(3000);
})
