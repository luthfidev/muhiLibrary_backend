require('dotenv').config()
const { APP_URL, APP_PORT } = process.env

const express = require('express')
const app = express()
app.use('/uploads', express.static('uploads'))
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

const cors = require('cors')
app.use(cors())

app.get('/', (request, response) => {
    const data = {
        name: 'Welcome to Muhi Library',
        version: '1.0.0'
    }
    response.send(data)
})

const auth = require('./src/routes/auth')
app.use('/auth', auth)

const users = require('./src/routes/users')
app.use('/users', users)

const books = require('./src/routes/books')
app.use('/books', books)

const authors = require('./src/routes/authors')
app.use('/authors', authors)

const genres = require('./src/routes/genres')
app.use('/genres', genres)

const bookstatuses = require('./src/routes/bookStatuses')
app.use('/bookstatuses', bookstatuses)

const transactionstatuses = require('./src/routes/transactionstatuses')
app.use('/transactionstatuses', transactionstatuses)

const transactions = require('./src/routes/transactions')
app.use('/transactions', transactions)

app.get('*', (request, response) => {
    response.status(400).send('Page not found')
})

app.listen(APP_PORT, () => {
    console.log(`Express app is listening on port ${APP_URL}`)
})