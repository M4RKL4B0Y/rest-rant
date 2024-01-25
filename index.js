require('dotenv').config()

const express = require('express')
const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Home')
    // res.render('Home')
})

app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    // res.render('error404')
    res.send('error404')
})

app.listen (process.env.PORT)