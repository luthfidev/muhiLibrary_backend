const router = require('express').Router()
const bookController = require('../controllers/books')

const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.get('/search/:title', bookController.searchBooks)
router.get('/', verify, checkRole('admin', 'user'), bookController.getAllBooks)
router.post('/', upload.single('image'), verify, validator.createBook, bookController.createBook)
router.patch('/:id', upload.single('image'), validator.updateBook, bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router