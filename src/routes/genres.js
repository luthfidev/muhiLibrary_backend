const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const { genreValidationRules, validate } = require('../utils/validators')

router.use(verify, cekBiodata)
  .use(checkRole('admin'))
  .get('/',
    genreController.getAllGenres)
  .post('/',
    genreValidationRules(),
    validate,
    genreController.createGenre)
  .patch('/:id',
    genreValidationRules(),
    validate,
    genreController.updateGenre)
  .delete('/:id',
    genreController.deleteGenre)

module.exports = router
