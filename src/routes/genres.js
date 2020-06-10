const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const { genreValidationRules, validate } = require('../utils/validators')



router.get('/',
    genreController.getAllGenres)
  .post('/',
    genreController.createGenre)
  .patch('/:id',
    genreController.updateGenre)
  .delete('/:id',
    genreController.deleteGenre)

module.exports = router
