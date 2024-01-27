const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
    // res.send('places/index')
})

module.exports = router