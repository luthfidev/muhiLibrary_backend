const router = require('express').Router()
const validator = require('../utils/validator')
const authorController = require('../controllers/authors')
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')

router.use(verify)
router.use(checkRole('admin'))

router.get('/', authorController.getAllAuthors)
router.post('/', validator.author, authorController.createAuthor)
router.patch('/:id', validator.author, authorController.updateAuthor)
router.delete('/:id', authorController.deleteAuthor)

module.exports = router