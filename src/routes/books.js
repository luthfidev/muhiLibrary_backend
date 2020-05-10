const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../helper/validator')

router.get('/search/:title', bookController.searchBooks)
router.get('/', bookController.getAllBooks)
router.post('/', validator.createBook, bookController.createBook)
router.patch('/:id', validator.updateBook, bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router