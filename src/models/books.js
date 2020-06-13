const db = require('../utils/db')

module.exports = {
  getBooksCount: (data) => {
    const sql = `SELECT COUNT(books.id) as total FROM books 
                     JOIN authors ON authors.id = books.author_id 
                     JOIN genres ON genres.id = books.genre_id
                     JOIN book_statuses ON book_statuses.id = books.status_id
                     WHERE books.title LIKE '%${data.search || ''}%' 
                     OR book_statuses.name LIKE '%${data.search || ''}%' 
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

  getBookByCondition: (data) => {
    const sql = 'SELECT * FROM books WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getAllBooks: (start, end, data) => {
    const sql = `SELECT books.id, 
                            books.title, 
                            books.image,
                            books.release_date as releaseDate,
                            genres.id as genreId,
                            genres.name as genreName,
                            authors.id as authorId,
                            authors.name as authorName,
                            books.description as description,
                            book_statuses.id as nameStatusId, 
                            book_statuses.name as nameStatus, 
                            books.created_at, 
                            books.updated_at FROM books 
                     JOIN authors ON authors.id = books.author_id 
                     JOIN genres ON genres.id = books.genre_id
                     JOIN book_statuses ON book_statuses.id = books.status_id
                     WHERE books.title LIKE '%${data.search || ''}%' 
                     OR book_statuses.name LIKE '${data.search || ''}%' 
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

  createBook: (data) => {
    const sql = 'INSERT INTO books SET ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  },

  updateBook: (data) => {
    const sql = 'UPDATE books SET ? WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results.affectedRows)
      })
    })
  },

  deleteBook: (data) => {
    const sql = 'DELETE FROM books WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results.affectedRows)
      })
    })
  },

  getDetailBook: (id) => {
    const sql = `SELECT books.id, 
                            books.title, 
                            books.description, 
                            books.image, 
                            authors.name as authorName, 
                            genres.name as genreName,
                            books.release_date as releaseDate, 
                            book_statuses.name as nameStatus,
                            book_statuses.description as descriptionStatus,  
                            books.created_at, 
                            books.updated_at FROM books 
                     JOIN authors ON authors.id = books.author_id 
                     JOIN genres ON genres.id = books.genre_id
                     JOIN book_statuses ON book_statuses.id = books.status_id
                     WHERE books.id = ${id}`
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  }
}
