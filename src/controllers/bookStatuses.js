const bookStatusModel = require('../models/bookStatuses')


module.exports = {
    getAllBookStatuses: async (request, response) => {
        const bookStatusData = await bookStatusModel.getAllBookStatuses()

        const data = {
            success: true,
            message: 'List all Book status',
            data: bookStatusData,
            pageInfo: {
                page: 1,
                totalPage: 5,
                perPage: 1,
                totalPage: 1,
                totalData: 10,
                nextLink: 'Next',
                PrevLink: 'Prev'
            }
        }
        response.status(200).send(data)
    },

    createBookStatus: async (request, response) => {
        const { name, description } = request.body
        const bookStatusData = {
            name,
            description
        }
        const results = await bookStatusModel.createBookStatus(bookStatusData)
        if (results) {
            const data = {
                success: true,
                message: 'Create status book has been success',
                data: bookStatusData
            }
            response.status(201).send(data)
        } else {
            const data = {
                success: false,
                message: 'Failed create book status'
            }
            response.status(400).send(data)
        }
    },

    updateBookStatus: async (request, response) => {
        const { id } = request.params
        const { name, description } = request.body
        const checkId = await bookStatusModel.getBookStatusByCondition({ id: parseInt(id) })
        if (checkId.length > 0) {
            const bookStatusData = [
                { name, description },
                { id: parseInt(id) }
            ]
            const results = await bookStatusModel.updateBookStatus(bookStatusData)
            if (results) {
                const data = {
                    success: true,
                    message: 'Book status has been updated',
                    data: bookStatusData[0]
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed updated book status'
                }
                response.status(401).send(data)
            }
        } else {
            const data = {
                success: false,
                message: `Book status with id ${id} not found`
            }
            response.status(400).send(data)
        }
    },

    deleteBookStatus: async (request, response) => {
        const { id } = request.params
        
        const _id = { id: parseInt(id) }
        const checkId = await bookStatusModel.getBookStatusByCondition(_id)
        if (checkId.length > 0) {
            const results = await bookStatusModel.deleteBookStatus(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `Book status with id ${id} is deleted`
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delte book status'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'Note data for delete'
            }
            response.status(400).send(data)
        }
    }

}