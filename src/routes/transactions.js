const router = require('express').Router()
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')
const transactionController = require('../controllers/transactions')

router.use(verify)
router.use(checkRole('admin'))

router.get('/', transactionController.getAllTransactions)
router.post('/', transactionController.createTransaction)
router.patch('/:id', transactionController.updateTransaction)
router.delete('/:id', transactionController.deleteTransaction)

module.exports = router