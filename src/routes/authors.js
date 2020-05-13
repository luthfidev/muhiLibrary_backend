const router = require('express').Router()
const validator = require('../utils/validator')
const authorController = require('../controllers/authors')
const verify = require('../utils/verifyToken')


router.get('/', verify, authorController.getAllAuthors)
router.post('/', verify, validator.author, authorController.createAuthor)
router.patch('/:id', verify, validator.author, authorController.updateAuthor)
router.delete('/:id', verify, authorController.deleteAuthor)

module.exports = router