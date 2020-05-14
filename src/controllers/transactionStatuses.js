const transactionStatusModel = require('../models/transactionStatuses')
const paging = require('../utils/pagingnation')

module.exports = {

    getAllTransactionStatuses: async (request, response) => {
        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }
        const sliceStart = paging.getPage(page) * paging.getPerPage(limit) - paging.getPerPage(limit)
        const sliceEnd = (paging.getPage(page) * paging.getPerPage(limit))
        const totalData = await transactionStatusModel.getTransactionStatusesCount(sliceStart, sliceEnd, condition)
        const totalPage = Math.ceil(totalData / paging.getPerPage(limit))
        
        const prevLink = paging.getPrevLink(paging.getPage(page), request.query)
        const nextLink = paging.getNextLink(paging.getPage(page), totalPage, request.query)

        const transactionData = await transactionStatusModel.getAllTransactionStatuses(sliceStart, sliceEnd, condition)
        const data = {
           success: true,
           message: 'List all status transactions',
           data: transactionData,
           pageInfo: {
               page: paging.getPage(page),
               totalPage,
               perPage: paging.getPerPage(limit),
               totalData,
               nextLink: nextLink && `http://localhost:5000/transactionsstatus?${nextLink}`,
               prevLink: prevLink && `http://localhost:5000/transactionsstatus?${prevLink}`
           }
        }
        response.status(200).send(data)
    },

    createTransactionStatus: async (request, response) => {
        const { name, description } = request.body
        const transactionStatusData = {
            transaction_date, 
            name,
            description
        }
        const results = await transactionStatusModel.createTransaction(transactionStatusData)
        if (results) {
            const data = {
                success: true,
                message: 'Create transactoin status has been success',
                data: transactionStatusData
            }
            response.status(201).send(data)
        } else {
            const data = {
                success: false,
                message: 'Failed create transaction status'
            }
            response.status(400).send(data)
        }
    },

    updateTransactionStatus: async (request, response) => {
        const { id } = request.params
        const { name, description } = request.body
        const checkId = await transactionStatusModel.getTransactionStatusByCondition({ id: parseInt(id) })
        if (checkId.length > 0) {
            const transactionStatusData = [
                { name, description },
                { id: parseInt(id) }
            ]
            const results = await transactionModel.updateTransactionStatus(transactionStatusData)
            if (results) {
                const data = {
                    success: true,
                    message: 'Transaction status has been updated',
                    data: transactionStatusData[0]
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed create transaction status'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: `Transaction status with id ${id} not found`
            }
            response.status(400).send(data)
        }
    },

    deleteTransactionStatus: async (request, response) => {
        const { id } = request.params
        const _id = { id: parseInt(id) }
        const checkId = await transactionStatusModel.getTransactionStatusByCondition(_id)
        if (checkId.length > 0) {
            const results = await transactionStatusModel.deleteTransactionStatus(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `Transaction status with id ${id} is deleted`
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delete transaction status'
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