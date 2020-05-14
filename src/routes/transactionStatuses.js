const router = require('express').Router()
const transactionStatuses = require('../controllers/transactionStatuses')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')

router.use(verify)
router.use(checkRole('admin'))

router.get('/', transactionStatuses.getAllTransactionStatuses)
router.post('/', transactionStatuses.createTransactionStatus)
router.patch('/:id', transactionStatuses.updateTransactionStatus)
router.delete('/:id', transactionStatuses.deleteTransactionStatus)

module.exports = router