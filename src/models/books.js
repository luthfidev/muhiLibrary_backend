const db = require('../utils/db')

module.exports = {
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
    }
}