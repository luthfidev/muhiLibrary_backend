const db = require('../utils/db')

module.exports = {

    getTransactionStatusesCount: (data) => {
        const sql = `SELECT COUNT(*) as total FROM transaction_statuses
                        WHERE name LIKE '%${data.search || ''}%' 
                        ORDER BY name ${parseInt(data.sort) ? 'DESC' : 'ASC'}`
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error).total)
                }
                resolve(results[0].total)
            })
        })
    },

    getTransactionStatusByCondition: (data) => {
        const sql = 'SELECT * FROM transaction_statuses WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    getAllTransactionStatuses: (start, end, data) => {
        const sql = `SELECT * FROM transaction_statuses
                                WHERE name LIKE '%${data.search || ''}%' 
                                ORDER BY name ${parseInt(data.sort) ? 'DESC' : 'ASC'} 
                                LIMIT ${end} OFFSET ${start}` 
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    createTransactionStatus: (data) => {
        const sql = 'INSERT INTO transaction_statuses SET ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    updateTransactionStatus: (data) => {
        const sql = 'UPDATE transaction_statuses SET ? WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results.affectedRows)
            })
        }) 
      },

    deleteTransactionStatus: (data) => {
        const sql = 'DELETE FROM book_statuses WHERE ?'
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