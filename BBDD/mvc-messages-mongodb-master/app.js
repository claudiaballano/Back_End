// El archivo app.js pasa a ser nuestro "script de inicio", y se encargará, en otras tareas, en registrar todo el 'middleware' de nuestra aplicación 
const express = require('express');

const mongoConnect = require('./util/database').mongoConnect


const app = express();

app.set('view engine', 'ejs');

const errorController = require('./controllers/error');
const messagesRoutes = require('./routes/messages');


app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(messagesRoutes);

app.use(errorController.get404);

mongoConnect(()=> {
    app.listen(3000);
})
