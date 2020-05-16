const { validationResult } = require('express-validator')
const { APP_URL } = process.env
const transactionModel = require('../models/transactions')
const userModel = require('../models/users')
const pagination = require('../utils/pagination')


module.exports = {

    getAllTransactions: async (request, response) => {

        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }

        const sliceStart = pagination.getPage(page) * pagination.getPerPage(limit) - pagination.getPerPage(limit)
        const sliceEnd = (pagination.getPage(page) * pagination.getPerPage(limit))
        const totalData = await transactionModel.getTransactionsCount(condition)
        const totalPage = Math.ceil(totalData / pagination.getPerPage(limit))
        const prevLink = pagination.getPrevLink(pagination.getPage(page), request.query)
        const nextLink = pagination.getNextLink(pagination.getPage(page), totalPage, request.query)

        const transactionData = await transactionModel.getAllTransactions(sliceStart, sliceEnd, condition)
        const data = {
           success: true,
           message: 'List all transaction',
           data: transactionData,
           pageInfo: {
               page: pagination.getPage(page),
               totalPage,
               perPage: pagination.getPerPage(limit),
               totalData,
               nextLink: nextLink && `${APP_URL}transactions?${nextLink}`,
               prevLink: prevLink && `${APP_URL}transactions?${prevLink}`
           }
        }
        response.status(200).send(data)
    },

    createTransaction: async (request, response) => {
        const { transaction_date, user_id, book_id, status_id } = request.body
        
        const isFound = await userModel.getUserCondition({ id: user_id })
        if (isFound.length > 0) {
            const Error = await validationResult(request)
            if (!Error.isEmpty()) {
                const data = {
                    success: false,
                    message: Error.array()
                }
                response.status(400).send(data)
                return
            }
            const transactionData = {
                transaction_date, 
                user_id, 
                book_id, 
                status_id
                
            }

            const results = await transactionModel.createTransaction(transactionData)
            if (results) {
                const data = {
                    success: true,
                    message: 'Create transactoin has been success',
                    data: transactionData
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed create transaction'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'User not found'
            }
            response.status(400).send(data)
        } 
    },

    updateTransaction: async (request, response) => {
        const { id } = request.params
        const { transaction_date, user_id, book_id, status_id } = request.body
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error.array()
            }
            response.status(400).send(data)
            return
        }
        const checkId = await transactionModel.getTransactionByCondition({ id: parseInt(id) })
        if (checkId.length > 0) {
            const transactionData = [
                { transaction_date, user_id, book_id, status_id },
                { id: parseInt(id) }
            ]
            const results = await transactionModel.updateTransaction(transactionData)
            if (results) {
                const data = {
                    success: true,
                    message: 'Transaction has been updated',
                    data: transactionData[0]
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed create transaction'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: `Transaction with id ${id} not found`
            }
            response.status(400).send(data)
        }
    },

    deleteTransaction: async (request, response) => {
        const { id } = request.params
        const _id = { id: parseInt(id) }
        const checkId = await transactionModel.getTransactionByCondition(_id)
        if (checkId.length > 0) {
            const results = await transactionModel.deleteTransaction(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `Transaction with id ${id} is deleted`
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delete transaction'
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