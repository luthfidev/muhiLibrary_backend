const router = require('express').Router()
const bookStatuses = require('../controllers/bookStatuses')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')

router.use(verify)
router.use(checkRole('admin'))

router.get('/', bookStatuses.getAllBookStatuses)
router.post('/', bookStatuses.createBookStatus)
router.patch('/:id', bookStatuses.updateBookStatus)
router.delete('/:id', bookStatuses.deleteBookStatus)

module.exports = router