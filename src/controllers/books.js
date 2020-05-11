const bookModel = require('../models/books')
const { validationResult } = require('express-validator')
const fs = require('fs')


module.exports = {

    getAllBooks: async (request, response) => {
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

    searchBooks: async (request, response) => {
        const { title } = request.params
        const bookData = await bookModel.getAllBooks()
        var results = await bookData.filter(result => result.title === title)
        if (results.length > 0) {
            const data = {
                success: true,
                message: 'List search Book',
                data: results,
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
        } else {
            const data = {
                success: false,
                message: 'Book title not found'
            }
            response.status(400).send(data)
        }

    },

    createBook: async (request, response) => {
        const { title, description, genre_id, author_id } = request.body
        const  image  = request.file.path 
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
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
    },

    updateBook: async (request, response) => {
        const { id } = request.params
        const { title, description, image, genre_id, author_id } = request.body
        const CheckId = await bookModel.getBookByCondition({ id_book: parseInt(id) })
        if (CheckId.length > 0) {
        const Error = await validationResult(request)
            if (!Error.isEmpty()) {
                const data = {
                    success: false,
                    message: Error
                }
                response.status(422).send(data)
                return
            }
            const bookData = [
                { title, description, image, genre_id, author_id },
                { id_book: parseInt(id) }
            ]
            const results = await bookModel.updateBook(bookData)
            if (results) {
                const data = {
                    success: true,
                    message: 'book has been update',
                    data: bookData[0]
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed update book'
                }
                response.status(401).send(data)
            }
        } else {
            const data = {
                success: false,
                message: `book with ${id} not found`
            }
            response.status(400).send(data)
        }
    },

    deleteBook: async (request, response) => {
        const { id } = request.params
        const _id = { id_book: parseInt(id) }
        const CheckId = await bookModel.getBookByCondition(_id)
        if (CheckId.length > 0) {
            const results = await bookModel.deleteBook(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `Book with id ${id} is deleted`
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delete book'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'Not data for delete'
            }
            response.status(400).send(data)
        }
    }

}