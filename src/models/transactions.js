const db = require('../utils/db')

module.exports = {
    getTransactionByCondition: (data) => {
        const sql = 'SELECT * FROM transactions WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    getTransactionDetailUser: (id) => {
        console.log(id)
        const sql =`SELECT transactions.id, 
                        transactions.transaction_date, 
                        users.email, 
                        user_details.user_id, 
                        user_details.name, 
                        books.id as idBook, 
                        books.title, 
                        genres.name as genreName, 
                        authors.name as authorName, 
                        transaction_statuses.name as statusName FROM transactions 
                JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                JOIN users ON users.id = transactions.user_id
                JOIN books ON books.id = transactions.book_id
                JOIN genres ON genres.id = books.genre_id
                JOIN authors ON authors.id = books.author_id
                JOIN user_details ON user_details.user_id = users.id 
                WHERE transactions.user_id = ?`
        return new Promise((resolve, reject) => {
            db.query(sql, id, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    getTransactionsCount: (data) => {
        const sql = `SELECT COUNT(transactions.id) as total FROM transactions 
                     JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                     JOIN users ON users.id = transactions.user_id
                     JOIN books ON books.id = transactions.book_id
                     JOIN genres ON genres.id = books.genre_id
                     JOIN authors ON authors.id = books.author_id
                     JOIN user_details ON user_details.user_id = users.id
                     WHERE books.title LIKE '%${data.search || ''}%' 
                     OR transaction_statuses.name LIKE '${data.search || ''}%' 
                     ORDER BY books.title ${parseInt(data.sort) ? 'DESC' : 'ASC'}`

            return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error).total)
                }
                resolve(results[0].total)
            })
        })
    },

    getAllTransactions: (start, end, data) => {
        const sql = `SELECT transactions.id, 
                            transactions.transaction_date, 
                            users.email, 
                            user_details.user_id, 
                            user_details.name, 
                            books.id as idBook, 
                            books.title, 
                            genres.name as genreName, 
                            authors.name as authorName, 
                            transaction_statuses.name as statusName FROM transactions 
                     JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                     JOIN users ON users.id = transactions.user_id
                     JOIN books ON books.id = transactions.book_id
                     JOIN genres ON genres.id = books.genre_id
                     JOIN authors ON authors.id = books.author_id
                     JOIN user_details ON user_details.user_id = users.id 
                     WHERE books.title LIKE '%${data.search || ''}%'
                     OR transaction_statuses.name LIKE '${data.search || ''}%' 
                     ORDER BY books.title ${parseInt(data.sort) ? 'DESC' : 'ASC'} LIMIT ${end} OFFSET ${start}`
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    createTransaction: (data) => {
        const sql = 'INSERT INTO transactions SET ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(true)
            })
        })
    },

    updateTransaction: (data) => {
        const sql = 'UPDATE transactions SET ? WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) =>{
                if (error) {
                    reject(Error(error))
                }
                resolve(results.affectedRows)
            })
        })
    },

    deleteTransaction: (data) => {
        const sql = 'DELETE FROM transactions WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results.affectedRows)
            })
        })
    }

}