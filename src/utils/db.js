require('dotenv').config()
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})
connection.connect(function(error) {
    if (error) {
      return console.log('DB not connect')
    }
    console.log('DB is connect')
})

module.exports = connection