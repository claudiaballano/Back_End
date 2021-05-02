// Express modules
const express = require('express')
const cookieParser = require('cookie-parser')

// Custom modules

const authRoutes = require('./routes/auth')
const imageRoutes = require('./routes/images')


// Server variables
const app = express()
app.set('view engine', 'ejs')


// Add middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// <-- HERE THE COOKIE-PARSER MIDDLEWARE -->
app.use(cookieParser())

app.use(authRoutes)
app.use(imageRoutes)

app.listen(3000)


