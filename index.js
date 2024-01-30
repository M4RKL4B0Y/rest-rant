// Modules and Globals
require('dotenv').config()
const express = require('express')
// const methodOverride = require('method-overide')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Controllers & Routes
app.use('/places', require('./controllers/places'))

//HOME
app.get('/', (req, res) => {
    // res.send('home')
    res.render('home')
})

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      res.render('places/index', { places })
  })  

//404
app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
    // res.send('error404')
})

app.listen (process.env.PORT)