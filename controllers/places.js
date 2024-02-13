const router = require('express').Router()
const places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

router.get('/', (req, res) => {
    let places = []
    res.render('places/index', { places })
    // res.send('places/index')
})

router.get('/:id', (req, res) => {})

module.exports = router


