const router = require('express').Router()
const genreController = require('../controllers/genres')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')

router.use(verify)
router.use(checkRole('admin'))

router.get('/', genreController.getAllGenres)
router.post('/', genreController.createGenre)
router.patch('/:id', genreController.updateGenre)
router.delete('/:id', genreController.deleteGenre)

module.exports = router