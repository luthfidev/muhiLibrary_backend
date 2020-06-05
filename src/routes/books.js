const router = require('express').Router()
const bookController = require('../controllers/books')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')


router.get('/',
        bookController.getAllBooks)
      .post('/',
        cekBiodata,
        verify,
        checkRole('admin'),
        bookController.createBook)
      .patch('/:id',
        cekBiodata,
        verify,
        checkRole('admin'),
        bookController.updateBook)
      .delete('/:id',
        cekBiodata,
        verify,
        checkRole('admin'),
        bookController.deleteBook)
      .get('/detail/:id',
        cekBiodata,
        verify,
        bookController.getDetailBook)

module.exports = router
