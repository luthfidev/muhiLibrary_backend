require('dotenv').config()
const { APP_PORT } = process.env

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

const cors = require('cors')
app.use(cors())

app.get('/', (request, response) => {
    const data = {
        name: 'Welcome to Muhi Library',
        version: '1.0.0'
    }
    response.send(data)
})

app.get('/', (request, response) => {
    response.send({
        msg: 'Backend is running'
    })
})

const users = require('./src/routes/users')
app.use('/users', users)

const books = require('./src/routes/books')
app.use('/books', books)

app.get('*', (request, response) => {
    response.status(400).send('Page not found')
})

app.listen(APP_PORT, () => {
    console.log(`Express app is listening on port ${APP_PORT}`)
})