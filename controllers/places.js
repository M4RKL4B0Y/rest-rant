const router = require('express').Router()

router.get('/', (req, res) => {
    // res.render('GET /places')
    res.send('GET /places')
})

module.exports = router