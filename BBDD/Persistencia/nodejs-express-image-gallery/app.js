// Express modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Custom modules
const database= require ('./utils/database')


const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/images');


// Server variables
const app = express();
app.set('view engine', 'ejs');


// Add middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.use(authRoutes);
app.use(imageRoutes);

app.listen(3000);
// database.mongoConnect(uri, ()=>{
//     app.listen(3000);
// })


