const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', { places })
    // res.send('places/index')
})

router.get('/:id', (req, res) => {})

module.exports = router


