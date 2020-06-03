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

router.use(verify, cekBiodata)
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
    transactionValidationRules(),
    validate,
    transactionController.createTransaction)
  .post('/user',
    transactionUserValidationRules(),
    validate,
    transactionController.createUserTransaction)
  .patch('/:id',
    checkRole('admin'),
    transactionValidationRules(),
    validate,
    transactionController.updateTransaction)
  .delete('/:id',
    checkRole('admin'),
    transactionController.deleteTransaction)

module.exports = router
