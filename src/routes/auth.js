const router = require('express').Router()
const authController = require('../controllers/auth')
const validator = require('../utils/validator')


router.post('/signin',  authController.loginUser)
router.post('/register', validator.registerUser, authController.registerUser)

module.exports = router