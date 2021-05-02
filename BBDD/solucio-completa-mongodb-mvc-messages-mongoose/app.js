// El archivo app.js pasa a ser nuestro "script de inicio", y se encargará, en otras tareas, en registrar todo el 'middleware' de nuestra aplicación 
const express = require('express');

const mongoose = require('mongoose');


const uri = "mongodb+srv://root:root@cluster0.kpgip.mongodb.net/messages-mongoose"; 
const app = express();

app.set('view engine', 'ejs');

const errorController = require('./controllers/error');
const messagesRoutes = require('./routes/messages');



app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(messagesRoutes);

app.use(errorController.get404);

// Primero tenemos que conectarnos correctamente a la base de datos. Después, ya podemos empezar a escuchar por el puerto 3000


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); 

db.once('open', function() {
  console.log('We are conected')
  app.listen(3000)
});

