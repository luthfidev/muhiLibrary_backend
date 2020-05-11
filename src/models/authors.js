const db = require('../utils/db')


module.exports = {
    createAuthorBook: (data) => {
        const sql = 'INSERT INTO authors SET ?'
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