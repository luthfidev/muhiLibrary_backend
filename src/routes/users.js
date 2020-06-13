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
  .get('/detail/:id',
    usersController.getDetailUser)
  .patch('/biodata',
    upload.single('picture'),
    usersController.updateUserDetail)

module.exports = router
