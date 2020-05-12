const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const upload = require('../utils/multer')

router.get('/', verify, usersController.getAllUsers)
router.post('/', usersController.createUser)
router.get('/:id', usersController.getDetailUser)
router.post('/biodata', upload.single('picture'), validator.createUserDetail, usersController.createUserDetail)
router.post('/login', usersController.loginUser)

module.exports = router