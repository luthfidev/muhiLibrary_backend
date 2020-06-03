const router = require('express').Router()
const bookStatuses = require('../controllers/bookStatuses')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const cekBiodata = require('../utils/cekBiodata')

router.use(verify, cekBiodata)
  .use(checkRole('admin'))
  .get('/',
    bookStatuses.getAllBookStatuses)
  .post('/',
    bookStatuses.createBookStatus)
  .patch('/:id',
    bookStatuses.updateBookStatus)
  .delete('/:id',
    bookStatuses.deleteBookStatus)

module.exports = router
