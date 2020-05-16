const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.use(verify)
      .get('/',
            bookController.getAllBooks)
      .post('/', 
            checkRole('admin'), 
            upload.single('image'), 
            validator.book, 
            bookController.createBook)
      .patch('/:id', 
            checkRole('admin'), 
            upload.single('image'), 
            validator.book, 
            bookController.updateBook)
      .delete('/:id', 
            checkRole('admin'), 
            bookController.deleteBook)
      .get('/detail/:id', 
            bookController.getDetailBook)

module.exports = router