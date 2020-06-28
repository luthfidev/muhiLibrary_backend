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

  getTransactionsCountUser: (id, data) => {
    const sql = `SELECT COUNT(transactions.id) as total FROM transactions 
                     JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                     JOIN users ON users.id = transactions.user_id
                     JOIN books ON books.id = transactions.book_id
                     JOIN genres ON genres.id = books.genre_id
                     JOIN authors ON authors.id = books.author_id
                     JOIN user_details ON user_details.user_id = users.id
                     WHERE books.title LIKE '%${data.search || ''}%
                     AND transactions.user_id = ${id}' 
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

  getTransactionDetailUser: (id, start, end, data) => {
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
                WHERE transactions.user_id = ?
                AND books.title LIKE '%${data.search || ''}%'
                AND transaction_statuses.name LIKE '${data.search || ''}%' 
                ORDER BY transactions.transaction_date ${parseInt(data.sort) ? 'DESC' : 'ASC'} LIMIT ${end} OFFSET ${start}`
    return new Promise((resolve, reject) => {
      db.query(sql, id, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getTransactionDetail: (id) => {
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
                WHERE transactions.id = ?`
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
                            user_details.user_id as userid, 
                            user_details.name,
                            books.id as bookid, 
                            books.title, 
                            transaction_statuses.name as statusName FROM transactions 
                     JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                     JOIN users ON users.id = transactions.user_id
                     JOIN books ON books.id = transactions.book_id
                     JOIN user_details ON user_details.user_id = users.id 
                     WHERE books.title LIKE '%${data.search || ''}%'
                     OR transaction_statuses.name LIKE '${data.search || ''}%' 
                     ORDER BY transactions.transaction_date ${parseInt(data.sort) ? 'DESC' : 'ASC'} LIMIT ${end} OFFSET ${start}`
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getChartTransactions: () => {
    const sql = `SELECT transactions.id, transactions.transaction_date,
                        COUNT(IF(transaction_statuses.name = 'Pending', 1, NULL)) 'pending',
                        COUNT(IF(transaction_statuses.name = 'Return the Book', 1, NULL)) 'return_the_book',
                        COUNT(IF(transaction_statuses.name = 'Borrowed', 1, NULL)) 'borrowed'
                  FROM transactions
                  JOIN transaction_statuses ON transaction_statuses.id = transactions.status_id
                  GROUP BY MONTH(transactions.transaction_date)`
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
    console.log(data)
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
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results.affectedRows)
      })
    })
  },

  updateTransactionStatus: (data) => {
    console.log([data[0].status_id, data[1].id])
    const sql = 'UPDATE transactions SET status_id = ? WHERE id = ?'
    return new Promise((resolve, reject) => {
      db.query(sql, [data[0].status_id, data[1].id], (error, results) => {
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
