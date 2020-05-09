const router = require('express').Router()
const bookController = require('../controllers/books')

router.get('/', bookController.getAllBooks)

module.exports = router