const router = require('express').Router()
const authorController = require('../controllers/authors')

router.post('/', authorController.createAuthor)

module.exports = router