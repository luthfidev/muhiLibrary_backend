const router = require('express').Router()
const checkRole = require('../utils/roles')
const verify = require('../utils/verifyToken')
const cekBiodata = require('../utils/cekBiodata')
const transactionController = require('../controllers/transactions')
const {
  transactionValidationRules,
  transactionUserValidationRules,
  validate
} = require('../utils/validators')


 router.get('/',
    transactionController.getAllTransactions)
  .get('/userstatus/',
    transactionController.getTransactionDetailUser)
  .get('/:id',
    checkRole('admin'),
    transactionController.getTransactionDetail)
  .post('/',
    transactionController.createTransaction)
  .post('/user',
    transactionController.createUserTransaction)
  .patch('/:id',
    transactionController.updateTransaction)
  .delete('/:id',
    transactionController.deleteTransaction)

module.exports = router
