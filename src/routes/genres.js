const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const validator = require('../utils/validator')


router.use(verify)
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