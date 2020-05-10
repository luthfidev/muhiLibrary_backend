const bookModel = require('../models/books')
const { validationResult } = require('express-validator')

module.exports = {

    getAllBooks: async (request, response, next) => {
        const bookData = await bookModel.getAllBooks()

        const data = {
            success: true,
            message: 'List All Book',
            data: bookData,
            pageInfo: {
                page: 1,
                totalPage: 5,
                perPage: 1,
                totalData: 10,
                nextLink: 'Next',
                prevLink: 'Prev'
            }
        }
        response.status(200).send(data)
    },

    createBook: async (request, response) => {
        const { title, description, image, genre_id, author_id } = request.body
        const Error = await validationResult(request)
        if (!Error.length > 0) {
            const data = {
                success: false,
                message: Error
            }
            response.status(422).send(data)
            return
        }
            const bookData = {
                title,
                description,
                image,
                genre_id,
                author_id
            }
            const results = await bookModel.createBook(bookData)
            if (results) {
                const data = {
                    success: true,
                    message: 'create book has been success',
                    data: bookData
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed create book'
                }
                response.status(400).send(data)
            }
    }

}