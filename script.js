require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>This is a Youtube Page</h2>')
});

app.get('/login', (req, res) => {
    res.send('<h2>Login Page</h2>')
});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})