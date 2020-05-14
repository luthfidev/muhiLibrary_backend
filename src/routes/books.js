const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.use(verify)

router.get('/', bookController.getAllBooks)
router.post('/', checkRole('admin'), upload.single('image'), validator.createBook, bookController.createBook)
router.patch('/:id', checkRole('admin'), upload.single('image'), validator.updateBook, bookController.updateBook)
router.delete('/:id', checkRole('admin'), bookController.deleteBook)

module.exports = router