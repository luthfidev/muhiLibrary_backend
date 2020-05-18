const router = require('express').Router()
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')
const transactionController = require('../controllers/transactions')
const validator = require('../utils/validator')


router.use(verify)
      .get('/',
            checkRole('admin'), 
            transactionController.getAllTransactions)
      
      .get('/userstatus/',
            transactionController.getTransactionDetailUser)
      .get('/:id',
      checkRole('admin'),
            transactionController.getTransactionDetail) 
      .post('/',
            checkRole('admin'), 
            validator.transaction,
            transactionController.createTransaction)
      .post('/user', 
      checkRole('admin'),
            validator.userTransaction,
            transactionController.createUserTransaction)
      .patch('/:id',
            checkRole('admin'), 
            validator.transaction,
            transactionController.updateTransaction)
      .delete('/:id', 
            checkRole('admin'),
            transactionController.deleteTransaction)

module.exports = router