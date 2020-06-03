const router = require('express').Router()
const authorController = require('../controllers/authors')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const verify = require('../utils/verifyToken')
const { authorValidationRules, validate } = require('../utils/validators')

router.use(verify, cekBiodata)
  .use(checkRole('admin'))
  .get('/',
    authorController.getAllAuthors)
  .post('/',
    authorValidationRules(),
    validate,
    authorController.createAuthor)
  .patch('/:id',
    authorValidationRules(),
    validate,
    authorController.updateAuthor)
  .delete('/:id',
    authorController.deleteAuthor)

module.exports = router
