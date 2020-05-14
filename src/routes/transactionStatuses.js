const router = require('express').Router()
const transactionStatuses = require('../controllers/transactionStatuses')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const validator = require('../utils/validator')


router.use(verify)
      .use(checkRole('admin'))
      .get('/', 
            transactionStatuses.getAllTransactionStatuses)
      .post('/',
            validator.transactionstatus, 
            transactionStatuses.createTransactionStatus)
      .patch('/:id',
            validator.transactionstatus, 
            transactionStatuses.updateTransactionStatus)
      .delete('/:id', 
            transactionStatuses.deleteTransactionStatus)

module.exports = router