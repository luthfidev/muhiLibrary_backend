const { check } = require('express-validator')

exports.author = [
    check('name')
            .not().isEmpty().withMessage('Name is required')
            .isAlpha().withMessage('Name must be alpha')
            .isLength({max: 25}).withMessage('Max character 25'),
    check('description')
            .not().isEmpty().withMessage('Description is required')
            .isAlpha().withMessage('Description must be alpha')
            .isLength({max: 100}).withMessage('Max character 100'),
],

exports.genre = [
    check('name')
            .not().isEmpty().withMessage('Title is required')
            .isAlpha().withMessage('Name must be alpha')
            .isLength({max: 25}).withMessage('Max character 25')
],

exports.bookstatus = [
    check('name')
            .not().isEmpty().withMessage('Name is required')
            .isAlpha().withMessage('Name must be alpha')
            .isLength({max: 25}).withMessage('Max character 25'),
    check('description')
            .not().isEmpty().withMessage('Description is required')
            .isAlpha().withMessage('Description must be alpha')
            .isLength({max: 100}).withMessage('Max character 100'),
],

exports.transactionstatus = [
    check('name')
            .not().isEmpty().withMessage('Name is required')
            .isAlpha().withMessage('Name must be alpha')
            .isLength({max: 25}).withMessage('Max character 25'),
],

exports.book = [
    check('title')
            .not().isEmpty().withMessage('Title is required')
            .isLength({max: 40}).withMessage('Max character 40'),
    check('description')
            .not().isEmpty().withMessage('Description is required')
            .isAlpha().withMessage('Description must be alpha')
            .isLength({max: 100}).withMessage('Max character 100'), 
    check('genre_id')
            .not().isEmpty().withMessage('Genre id is required')
            .isNumeric().withMessage('Genre id must be numeric')
            .isLength({max: 1}).withMessage('Max Number 1'),
    check('author_id')
            .not().isEmpty().withMessage('Author id is required')
            .isNumeric().withMessage('Author id must be numeric')
            .isLength({max: 1}).withMessage('Max Number 1'),
    check('release_date')
            .not().isEmpty().withMessage('Release date id is required'),
    check('status_id')
            .not().isEmpty().withMessage('Status id is required')
            .isNumeric().withMessage('Status must be numeric')
            .isLength({max: 1}).withMessage('Max Number 1')
],

exports.transaction = [
    check('transactoin_date')
            .not().isEmpty().withMessage('Transaction date is required'),
    check('user_id')
            .not().isEmpty().withMessage('User id is required')
            .isNumeric().withMessage('User id must be Numeric'),
    check('book_id')
            .not().isEmpty().withMessage('Book id is required')
            .isNumeric().withMessage('Book must be numeric'),
    check('status_id')
            .not().isEmpty().withMessage('Status id is required')
            .isNumeric().withMessage('Status id must be numeric')
            .isLength({max: 1}).withMessage('Max Number 1')
],

exports.createUserDetail = [
    check('name')
            .not().isEmpty().withMessage('Name is required')
            .isAlphanumeric().withMessage('Name must be alphanumeric')
            .isLength({max: 25}).withMessage('Max character 25'),
    check('birtdate')
            .not().isEmpty().withMessage('Birthdate is required'),   
    check('gender')
            .not().isEmpty().withMessage('Gender is required')
            .isAlphanumeric().withMessage('Must be Alphanumeric')
            .isLength({max: 6}).withMessage('Max Character 6')    
],

exports.registerUser = [ 
    check('email')
            .not().isEmpty().withMessage('Email is required')
            .isEmail().withMessage('Pleace correct your email'),
    check('password')
            .not().isEmpty().withMessage('Password is required')
            .isLength({ max: 10 }).withMessage('Max password 10 character')
]

