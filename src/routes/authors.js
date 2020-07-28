const router = require('express').Router()
const authorController = require('../controllers/authors')
const checkRole = require('../utils/roles')
// const cekBiodata = require('../utils/cekBiodata')
const verify = require('../utils/verifyToken')
// const { authorValidationRules, validate } = require('../utils/validators')

router.get('/',
  authorController.getAllAuthors)
  .post('/',
    verify,
    checkRole('admin'),
    authorController.createAuthor)
  .patch('/:id',
    verify,
    checkRole('admin'),
    authorController.updateAuthor)
  .delete('/:id',
    verify,
    checkRole('admin'),
    authorController.deleteAuthor)

module.exports = router
