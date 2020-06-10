const router = require('express').Router()
const bookController = require('../controllers/books')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')

router.get('/',
  bookController.getAllBooks)
  .post('/',
    bookController.createBook)
  .patch('/:id',
    bookController.updateBook)
  .delete('/:id',
    bookController.deleteBook)
  .get('/detail/:id',
    bookController.getDetailBook)

module.exports = router
