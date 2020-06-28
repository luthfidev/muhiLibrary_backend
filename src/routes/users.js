const router = require('express').Router()
const usersController = require('../controllers/users')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.get('/',
  usersController.getAllUsers)
  .post('/',
    usersController.createUser)
  .delete('/:id',
    usersController.deleteUser)
  .get('/:id',
    verify,
    usersController.getDetailUser)
  .patch('/biodata',
    verify,
    upload.single('picture'),
    usersController.updateUserDetail)

module.exports = router
