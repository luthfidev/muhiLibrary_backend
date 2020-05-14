const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.use(verify)
      .get('/', 
           checkRole('admin'), 
           usersController.getAllUsers)
      .post('/', 
            checkRole('admin'), 
            usersController.createUser)
      .delete('/:id', 
            checkRole('admin'), 
            usersController.deleteUser)
      .get('/detail/:id', 
            usersController.getDetailUser)
      .post('/biodata', 
            upload.single('picture'),  
            validator.createUserDetail, 
            usersController.createUserDetail)

module.exports = router

