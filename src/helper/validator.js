const { check } = require('express-validator')

exports.createBook = [
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
]

