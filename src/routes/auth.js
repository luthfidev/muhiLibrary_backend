const router = require('express').Router()
const authController = require('../controllers/auth')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')

router.post('/signin',
            validator.signIn,  
            authController.signIn)
      .post('/signup', 
            validator.signUp, 
            authController.signUp)
      .delete('/logout',
            verify,  
            authController.logOut)

module.exports = router