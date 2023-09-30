require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('hello how are you')
})

app.get('/twitter', (req, res) => {
    res.send('you are on twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>logged in</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>youtube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})