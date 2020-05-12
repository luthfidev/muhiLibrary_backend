const authorModel = require('../models/authors')

module.exports = {

    getAllAuthors: async (request, response) => {
        const authorData = await authorModel.getAllAuthors()

        const data = {
            success: true,
            message: 'List authors',
            data: authorData,
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

    createAuthor: async (request, response) => {
        const { name, description } = request.body
        const authorData = {
            name,
            description
        }
        const results = await authorModel.createAuthorBook(authorkData)
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
    
    updateAuthor: async (request, response) => {
        const { id } = request.params
        const { name, description } = request.body
        const checkId = await authorModel.getAuthorByCondition({ id: parseInt(id) })
        if (checkId.length > 0) {
            const authorData = [
                {name, description},
                {id: parseInt(id)}
            ]
            const results = await authorModel.updateAuthor(authorData)
            if (results) {
                const data = {
                    success: true,
                    message: 'Author has been update',
                    data: authorData[0]
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed update author'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: `Author with id ${id} not found`
            }
            response.status(400).send(data)
        }
    }

}
