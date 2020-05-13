const bookStatusModel = require('../models/bookStatuses')
const paging = require('../utils/pagingnation')


module.exports = {
    getAllBookStatuses: async (request, response) => {

        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }
        const sliceStart = paging.getPage(page) * paging.getPerPage(limit) - paging.getPerPage(limit)
        const sliceEnd = (paging.getPage(page) * paging.getPerPage(limit))
        const totalData = await bookStatusModel.getBookStatusesCount(sliceStart, sliceEnd, condition)
        const totalPage = Math.ceil(totalData / paging.getPerPage(limit))
        
        const prevLink = paging.getPrevLink(paging.getPage(page), request.query)
        const nextLink = paging.getNextLink(paging.getPage(page), totalPage, request.query)

        const bookStatusData = await bookStatusModel.getAllBookStatuses(sliceStart, sliceEnd, condition)

        const data = {
            success: true,
            message: 'List all Book status',
            data: bookStatusData,
            pageInfo: {
                page: paging.getPerPage(page),
                totalPage,
                perPage: paging.getPerPage(page),
                totalPage,
                totalData,
                PrevLink: prevLink && `http://localhost:5000/bookstatuses?${nextLink}`,
                nextLink: nextLink && `http://localhost:5000/bookstatuses?${nextLink}`
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