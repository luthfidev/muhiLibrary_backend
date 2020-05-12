const db = require('../utils/db')

module.exports = {

    getGenreByCondition: (data) => {
        const sql = 'SELECT * FROM genres WHERE ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    getAllGenres: () => {
        const sql = 'SELECT * FROM genres'
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(results)
            })
        })
    },

    createGenre: (data) => {
        const sql = 'INSERT INTO genres SET ?'
        return new Promise((resolve, reject) => {
            db.query(sql, data, (error, results) => {
                if (error) {
                    reject(Error(error))
                }
                resolve(true)
            })
        })
    },

    updateGenre: (data) => {
      const sql = 'UPDATE genres SET ? WHERE ?'
      return new Promise((resolve, reject) => {
          db.query(sql, data, (error, results) => {
              if (error) {
                  reject(Error(error))
              }
              resolve(results.affectedRows)
          })
      }) 
    },

    deleteGenre: (data) => {
        const sql = 'DELETE FROM genres WHERE ?'
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