const router = require('express').Router()
const bookStatuses = require('../controllers/bookStatuses')

router.get('/', bookStatuses.getAllBookStatuses)
router.post('/', bookStatuses.createBookStatus)
router.patch('/:id', bookStatuses.updateBookStatus)
router.delete('/:id', bookStatuses.deleteBookStatus)

module.exports = router