const router = require('express').Router()
const bookController = require('../controllers/books')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')

router.get('/',
  bookController.getAllBooks)
  .post('/',
    verify,
    cekBiodata,
    checkRole('admin'),
    bookController.createBook)
  .patch('/:id',
    verify,
    cekBiodata,
    checkRole('admin'),
    bookController.updateBook)
  .delete('/:id',
    verify,
    cekBiodata,
    checkRole('admin'),
    bookController.deleteBook)
  .get('/detail/:id',
    verify,
    cekBiodata,
    bookController.getDetailBook)

module.exports = router
