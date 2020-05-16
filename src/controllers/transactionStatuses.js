const { APP_URL } = process.env
const transactionStatusModel = require('../models/transactionStatuses')
const pagination = require('../utils/pagination')

module.exports = {

    getAllTransactionStatuses: async (request, response) => {
        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }

        const sliceStart = pagination.getPage(page) * pagination.getPerPage(limit) - pagination.getPerPage(limit)
        const sliceEnd = (pagination.getPage(page) * pagination.getPerPage(limit))
        const totalData = await transactionStatusModel.getTransactionStatusesCount(condition)
        const totalPage = Math.ceil(totalData / pagination.getPerPage(limit))
        const prevLink = pagination.getPrevLink(pagination.getPage(page), request.query)
        const nextLink = pagination.getNextLink(pagination.getPage(page), totalPage, request.query)

        const transactionData = await transactionStatusModel.getAllTransactionStatuses(sliceStart, sliceEnd, condition)
        const data = {
           success: true,
           message: 'List all status transactions',
           data: transactionData,
           pageInfo: {
               page: pagination.getPage(page),
               totalPage,
               perPage: pagination.getPerPage(limit),
               totalData,
               nextLink: nextLink && `${APP_URL}transactionsstatus?${nextLink}`,
               prevLink: prevLink && `${APP_URL}transactionsstatus?${prevLink}`
           }
        }
        response.status(200).send(data)
    },

    createTransactionStatus: async (request, response) => {
        const { name, description } = request.body

        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error.array()
            }
            response.status(400).send(data)
            return
        }

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