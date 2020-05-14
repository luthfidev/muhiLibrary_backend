const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')

router.use(verify)

router.get('/', checkRole('admin'), usersController.getAllUsers)
router.post('/', checkRole('admin'), usersController.createUser)
router.delete('/:id', checkRole('admin'), usersController.deleteUser)
router.get('/detail/:id', usersController.getDetailUser)
router.post('/biodata', upload.single('picture'),  validator.createUserDetail, usersController.createUserDetail)

module.exports = router

