const router = require('express').Router()
const usersController = require('../controllers/users')
const verify = require('../helper/verifyToken')

router.get('/', verify, usersController.getAllUsers)
router.post('/', usersController.createUser)
router.post('/login', usersController.loginUser)

module.exports = router