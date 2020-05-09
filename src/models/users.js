const db = require('../utils/db')

module.exports = {
 
    getUsersCount: () => {
        const sql = 'SELECT COUNT(*) as total FROM users'
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error).total)
                }
                resolve(results[0].total)
            })
        })
    },

    getUserCondition: (data) => {
        const sql = 'SELECT * FROM users WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    getAllUsers: (start, end) => {
        const sql = `SELECT * FROM users LIMIT ${end} OFFSET ${start}`
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    createUser: (data) => {
        const sql = 'INSERT INTO users SET ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(true)
            })
        })
    },

}