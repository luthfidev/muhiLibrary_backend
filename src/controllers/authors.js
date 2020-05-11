const bookModel = require('../models/authors')

module.exports = {

    createAuthor: async (request, response) => {
        const { name, description } = request.body
        const authorBookData = {
            name,
            description
        }
        const results = await bookModel.createAuthorBook(authorBookData)
        if (results) {
            const data = {
                success: true,
                message: 'Create author book has ben success',
                data: authorBookData
            }
            response.status(201).send(data)
        } else {
            const data = {
                success: false,
                message: 'Failed create author book'
            }
            response.status(401).send(data)
        }
    },

}
