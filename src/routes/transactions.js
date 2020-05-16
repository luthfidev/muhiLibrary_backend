const router = require('express').Router()
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')
const transactionController = require('../controllers/transactions')
const validator = require('../utils/validator')


router.use(verify)
      .use(checkRole('admin'))
      .get('/', 
            transactionController.getAllTransactions)
      .post('/', 
            validator.transaction,
            transactionController.createTransaction)
      .patch('/:id', 
            validator.transaction,
            transactionController.updateTransaction)
      .delete('/:id', 
            transactionController.deleteTransaction)

module.exports = router