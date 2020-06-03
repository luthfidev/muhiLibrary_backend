const db = require('../utils/db')

module.exports = {
  getCheckLogin: (email) => {
    const sql = `SELECT logs.user_email,
                            logs.type FROM logs
                     WHERE ?`
    return new Promise((resolve, reject) => {
      db.query(sql, email, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  createLogsLogin: (data) => {
    const sql = 'INSERT INTO logs SET ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  },

  deleteLogsLogin: (condition) => {
    const sql = 'DELETE FROM logs WHERE user_email = ? AND type = ?'
    return new Promise((resolve, reject) => {
      db.query(sql, [condition.email, condition.type], (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  }
}
