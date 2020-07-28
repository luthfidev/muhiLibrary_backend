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
  .get('/chart',
    transactionController.getChartTransactions)
  .get('/userstatus',
    verify,
    transactionController.getTransactionDetailUser)
  .get('/:id',
    verify,
    checkRole('admin'),
    transactionController.getTransactionDetail)
  .post('/',
    transactionController.createTransaction)
  .post('/user',
    verify,
    cekBiodata,
    transactionController.createUserTransaction)
  .patch('/:id',
    transactionController.updateTransaction)
  .delete('/:id',
    transactionController.deleteTransaction)

module.exports = router
