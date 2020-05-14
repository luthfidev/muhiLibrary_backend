const { check } = require('express-validator')

exports.author = [
    check('name').not().isEmpty().withMessage('Title is required')
                  .isAlpha().withMessage('Name must be alpha')
                  .isLength({max: 25}).withMessage('Max character 25'),
    check('description').not().isEmpty().withMessage('Description is required')
                     .isAlpha().withMessage('Description must be alpha')
                     .isLength({max: 100}).withMessage('Max character 100'),
],

exports.createBook = [
    check('title').not().isEmpty().withMessage('Title is required')
                  .isLength({max: 25}).withMessage('Max character 25'), 
    check('genre_id').not().isEmpty().withMessage('Genre id is required')
                     .isNumeric().withMessage('genre_id must be numeric')
                     .isLength({max: 1}).withMessage('Max Number 1'),
    check('author_id').not().isEmpty().withMessage('Author id is required')
                      .isNumeric().withMessage('author_id must be numeric')
                      .isLength({max: 1}).withMessage('Max Number 1'),
    check('release_date').not().isEmpty().withMessage('Author id is required'),
    check('status_id').not().isEmpty().withMessage('Author id is required')
                      .isNumeric().withMessage('author_id must be numeric')
                      .isLength({max: 1}).withMessage('Max Number 1')
],

exports.updateBook = [
    check('title').not().isEmpty().withMessage('Title is required')
                  .isAlphanumeric().withMessage('Title must be alphanumeric')
                  .isLength({max: 10}).withMessage('Max character 10'),
    check('genre_id').not().isEmpty().withMessage('Genre id is required')
                     .isNumeric().withMessage('genre_id must be numeric')
                     .isLength({max: 1}).withMessage('Max Number 1'),
    check('author_id').not().isEmpty().withMessage('Author id is required')
                      .isNumeric().withMessage('author_id must be numeric')
                      .isLength({max: 1}).withMessage('Max Number 1')
],

exports.createUserDetail = [
    check('name').not().isEmpty().withMessage('Name is required')
                 .isAlphanumeric().withMessage('Name must be alphanumeric')
                 .isLength({max: 25}).withMessage('Max character 25'),
    check('gender').not().isEmpty().withMessage('Gender is required')
                   .isAlphanumeric().withMessage('Must be Alphanumeric')
                   .isLength({max: 6}).withMessage('Max Character 6')
    /* check('picture').not().isEmpty().withMessage('Image is required'), */
    
],

exports.registerUser = [ 
    check('email').not().isEmpty().withMessage('Email is required')
                  .isEmail().withMessage('Pleace correct your email'),
    check('password').not().isEmpty().withMessage('Password is required')
                     .isLength({ max: 10 }).withMessage('Max password 10 character')

]

