const router = require('express').Router()
const bookController = require('../controllers/books')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
// const cekBiodata = require('../utils/cekBiodata')

router.get('/',
  bookController.getAllBooks)
  .post('/',
    verify,
    checkRole('admin'),
    bookController.createBook)
  .patch('/:id',
    verify,
    checkRole('admin'),
    bookController.updateBook)
  .delete('/:id',
    verify,
    checkRole('admin'),
    bookController.deleteBook)
  .get('/detail/:id',
    bookController.getDetailBook)

module.exports = router
