const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
// const cekBiodata = require('../utils/cekBiodata')
// const { genreValidationRules, validate } = require('../utils/validators')

router.get('/',
  genreController.getAllGenres)
  .post('/',
    verify,
    checkRole('admin'),
    genreController.createGenre)
  .patch('/:id',
    verify,
    checkRole('admin'),
    genreController.updateGenre)
  .delete('/:id',
    verify,
    checkRole('admin'),
    genreController.deleteGenre)

module.exports = router
