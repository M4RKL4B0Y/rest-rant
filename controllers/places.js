const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index')
    // res.send('places/index')
})

router.get('/:id', (req, res) => {})

module.exports = router