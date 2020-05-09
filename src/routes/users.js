const router = require('express').Router()
const usersController = require('../controllers/users')

router.get('/', usersController.getAllUsers)
router.post('/', usersController.createUser)
router.post('/login', usersController.loginUser)

module.exports = router