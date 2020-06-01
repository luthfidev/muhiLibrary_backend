const db = require('../utils/db')

module.exports = {

  getBookStatusesCount: (data) => {
    const sql = `SELECT COUNT(*) as total FROM book_statuses
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

  getBookStatusByCondition: (data) => {
    const sql = 'SELECT * FROM book_statuses WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getAllBookStatuses: (start, end, data) => {
    const sql = `SELECT * FROM book_statuses
                     WHERE name LIKE '%${data.search || ''}%' 
                     ORDER BY name ${parseInt(data.sort) ? 'DESC' : 'ASC'} LIMIT ${end} OFFSET ${start}`
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  createBookStatus: (data) => {
    const sql = 'INSERT INTO book_statuses SET ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  updateBookStatus: (data) => {
    const sql = 'UPDATE book_statuses SET ? WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results.affectedRows)
      })
    })
  },

  deleteBookStatus: (data) => {
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
