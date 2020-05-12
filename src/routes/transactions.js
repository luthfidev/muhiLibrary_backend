const router = require('express').Router()
const transactionController = require('../controllers/transactions')

router.get('/', transactionController.getAllTransactions)
router.post('/', transactionController.createTransaction)
router.patch('/:id', transactionController.updateTransaction)
router.delete('/:id', transactionController.deleteTransaction)

module.exports = router