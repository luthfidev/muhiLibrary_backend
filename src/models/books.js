const db = require('../utils/db')

module.exports = {

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

    getAllBooks: () => {
        const sql = `SELECT title, description, image, authors.name_author, genres.name_genre, date_added FROM 
                     books JOIN authors on authors.id_author = books.author_id 
                           JOIN genres on genres.id_genre = books.genre_id`
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
                if(error) {
                    reject(Error(error))
                }
                resolve(results.affectedRows)
            })
        })
    }

}