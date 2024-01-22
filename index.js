const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hell world!')
})

app.listen (3000)