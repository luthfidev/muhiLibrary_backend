const router = require('express').Router()
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')
const transactionController = require('../controllers/transactions')


router.get('/', verify, checkRole('admin') ,transactionController.getAllTransactions)
router.post('/', verify, checkRole('admin'), transactionController.createTransaction)
router.patch('/:id', verify, checkRole('admin'), transactionController.updateTransaction)
router.delete('/:id', verify, checkRole('admin'), transactionController.deleteTransaction)

module.exports = router