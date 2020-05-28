const router = require('express').Router()
const validator = require('../utils/validator')
const authorController = require('../controllers/authors')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const verify = require('../utils/verifyToken')

router.use(verify, cekBiodata)
      .use(checkRole('admin'))
      .get('/', 
            authorController.getAllAuthors)
      .post('/', 
            validator.author, 
            authorController.createAuthor)
      .patch('/:id', 
            validator.author, 
            authorController.updateAuthor)
      .delete('/:id', 
            authorController.deleteAuthor)

module.exports = router