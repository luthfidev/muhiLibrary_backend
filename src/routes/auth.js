const router = require('express').Router()
const authController = require('../controllers/auth')


router.post('/signin', authController.loginUser)

module.exports = router