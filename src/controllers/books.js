const bookModel = require('../models/books')

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
    }

}