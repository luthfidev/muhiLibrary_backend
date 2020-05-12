const db = require('../utils/db')

module.exports = {

    getAuthCondition: (data) => {
        const sql = 'SELECT * FROM users WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    }
}