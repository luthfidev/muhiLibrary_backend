const transactionModel = require('../models/transactions')

module.exports = {

    getAllTransactions: async (request, response) => {
        const transactionData = await transactionModel.getAllTransactions()

        const data = {
           success: true,
           message: 'List all transaction',
           data: transactionData,
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

    createTransaction: async (request, response) => {
        const { transaction_date, user_id, book_id, status_id } = request.body
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
    },

    updateTransaction: async (request, response) => {
        const { id } = request.params
        const { transaction_date, user_id, book_id, status_id } = request.body
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