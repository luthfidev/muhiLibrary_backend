const router = require('express').Router()
const bookStatuses = require('../controllers/bookStatuses')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')
const validator = require('../utils/validator')

router.use(verify, cekBiodata)
  .use(checkRole('admin'))
  .get('/',
    bookStatuses.getAllBookStatuses)
  .post('/',
    validator.bookstatus,
    bookStatuses.createBookStatus)
  .patch('/:id',
    validator.bookstatus,
    bookStatuses.updateBookStatus)
  .delete('/:id',
    bookStatuses.deleteBookStatus)

module.exports = router
