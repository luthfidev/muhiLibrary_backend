const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../helper/validator')
const verify = require('../helper/verifyToken')

router.get('/search/:title', bookController.searchBooks)
router.get('/', bookController.getAllBooks)
router.post('/', verify, validator.createBook, bookController.createBook)
router.patch('/:id', verify, validator.updateBook, bookController.updateBook)
router.delete('/:id', verify, bookController.deleteBook)

module.exports = router