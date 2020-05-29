require('dotenv').config()
const { APP_URL, APP_PORT } = process.env
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const helmet = require('helmet')


app.use(bodyparser.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))
app.use(cors()) 
app.use(helmet())

app.get('/', (request, response) => {
    const data = {
        name: 'Welcome to Muhi Library',
        version: '1.0.0'
    }
    response.send(data)
})

const auth = require('./src/routes/auth')
const users = require('./src/routes/users')
const books = require('./src/routes/books')
const authors = require('./src/routes/authors')
const genres = require('./src/routes/genres')
const bookstatuses = require('./src/routes/bookStatuses')
const transactions = require('./src/routes/transactions')

app.use('/auth', auth)
app.use('/users', users)
app.use('/books', books)
app.use('/authors', authors)
app.use('/genres', genres)
app.use('/bookstatuses', bookstatuses)
app.use('/transactions', transactions)

app.get('*', (request, response) => {
    response.status(400).send('Page not found')
})

app.listen(APP_PORT, () => {
    console.log(`Express app is listening on port ${APP_URL}`)
})