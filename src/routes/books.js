const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../helper/validator')

router.get('/', bookController.getAllBooks)
router.post('/', validator.createBook, bookController.createBook)

module.exports = router