const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const validator = require('../utils/validator')


router.use(verify, cekBiodata)
      .use(checkRole('admin'))
      .get('/', 
            genreController.getAllGenres)
      .post('/',
            validator.genre, 
            genreController.createGenre)
      .patch('/:id',
            validator.genre,  
            genreController.updateGenre)
      .delete('/:id', 
            genreController.deleteGenre)

module.exports = router