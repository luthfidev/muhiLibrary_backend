const router = require('express').Router()
const genreController = require('../controllers/genres')

router.get('/', genreController.getAllGenres)
router.post('/', genreController.createGenre)
router.patch('/:id', genreController.updateGenre)
router.delete('/:id', genreController.deleteGenre)

module.exports = router