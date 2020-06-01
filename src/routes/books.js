const router = require('express').Router()
const bookController = require('../controllers/books')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')

router.use(verify, cekBiodata)
  .get('/',
    bookController.getAllBooks)
  .post('/',
    checkRole('admin'),
    validator.book,
    bookController.createBook)
  .patch('/:id',
    checkRole('admin'),
    validator.book,
    bookController.updateBook)
  .delete('/:id',
    checkRole('admin'),
    bookController.deleteBook)
  .get('/detail/:id',
    bookController.getDetailBook)

module.exports = router
