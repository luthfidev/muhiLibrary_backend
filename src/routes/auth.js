const router = require('express').Router()
const authController = require('../controllers/auth')
const validator = require('../utils/validator')


router.post('/signin',
            validator.signIn,  
            authController.signIn)
      .post('/signup', 
            validator.signUp, 
            authController.signUp)

module.exports = router