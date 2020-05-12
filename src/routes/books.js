const router = require('express').Router()
const bookController = require('../controllers/books')

const validator = require('../helper/validator')
const verify = require('../helper/verifyToken')
const upload = require('../helper/uploadImage')

router.get('/search/:title', bookController.searchBooks)
router.get('/', bookController.getAllBooks)
router.post('/', upload.single('image'), verify, validator.createBook, bookController.createBook)
router.patch('/:id', verify, validator.updateBook, bookController.updateBook)
router.delete('/:id', verify, bookController.deleteBook)

module.exports = router