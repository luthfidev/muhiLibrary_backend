const router = require('express').Router()
const authorController = require('../controllers/authors')

router.get('/', authorController.getAllAuthors)
router.post('/', authorController.createAuthor)

module.exports = router