// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Express Settings
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

//HOME
app.get('/', (req, res) => {
    // res.send('home')
    res.render('home')
})



//404
app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
    // res.send('error404')
})

app.listen (process.env.PORT)

