const router = require('express').Router()
const usersController = require('../controllers/users')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.get('/',
  verify,
  checkRole('admin'),
  usersController.getAllUsers)
  .post('/',
    verify,
    checkRole('admin'),
    usersController.createUser)
  .delete('/:id',
    verify,
    usersController.deleteUser)
  .get('/:id',
    verify,
    usersController.getDetailUser)
  .patch('/biodata',
    verify,
    usersController.updateUserDetail)
  .patch('/upload/:id',
    verify,
    usersController.uploadImageUser)

module.exports = router
