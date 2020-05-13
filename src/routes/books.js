const router = require('express').Router()
const bookController = require('../controllers/books')

const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.get('/', verify, bookController.getAllBooks)
router.post('/', verify, checkRole('admin'), upload.single('image'), validator.createBook, bookController.createBook)
router.patch('/:id', verify, checkRole('admin'), upload.single('image'), validator.updateBook, bookController.updateBook)
router.delete('/:id', verify, checkRole('admin'), bookController.deleteBook)

module.exports = router