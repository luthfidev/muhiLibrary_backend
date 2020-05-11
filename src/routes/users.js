const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../helper/validator')
const verify = require('../helper/verifyToken')
const upload = require('../helper/uploadImage')

router.get('/', verify, usersController.getAllUsers)
router.post('/', usersController.createUser)
router.get('/:id', usersController.getDetailUser)
router.post('/biodata', upload.single('picture'), validator.createUserDetail, usersController.createUserDetail)
router.post('/login', usersController.loginUser)

module.exports = router