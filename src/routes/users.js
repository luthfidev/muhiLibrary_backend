const router = require('express').Router()
const usersController = require('../controllers/users')
const validator = require('../utils/validator')
const verify = require('../utils/verifyToken')
const checkRole = require('../utils/roles')
const upload = require('../utils/multer')


router.get('/', verify, checkRole('admin'), usersController.getAllUsers)
router.post('/', verify, checkRole('admin'), usersController.createUser)
router.delete('/:id', verify, checkRole('admin'), usersController.deleteUser)
router.get('/detail/:id', verify, checkRole('admin'), usersController.getDetailUser)
// router.post('/biodata', verify, upload.single('picture'),  validator.createUserDetail, usersController.createUserDetail)
router.post('/biodata', verify, upload.single('picture'), validator.createUserDetail, usersController.createUserDetail, function(req, res, next){
    console.log("file"+req.file+req.files);
    res.send('Successfully uploaded!');
  });
  

module.exports = router