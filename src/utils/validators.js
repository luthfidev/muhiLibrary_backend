const { body } = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'author': {
      return [
        body('name', 'Name is required').not().isEmpty().isLength({ max: 25 }).withMessage('Max character 25'),
        body('description', 'Description is required').not().isEmpty().isLength({ max: 100 }).withMessage('Max character 100')
        // body('phone').optional().isInt(),
        // body('status').optional().isIn(['enabled', 'disabled'])
      ]
    }
  }
}
