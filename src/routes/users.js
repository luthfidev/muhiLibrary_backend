const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../helper/validator')
const verify = require('../helper/verifyToken')

router.get('/', verify, usersController.getAllUsers)
router.post('/', usersController.createUser)
router.post('/biodata', verify, validator.createUserDetail, usersController.createUserDetail)
router.post('/login', usersController.loginUser)

module.exports = router