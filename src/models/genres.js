const db = require('../utils/db')

module.exports = {

    getGenresCount: (data) => {
        const sql = `SELECT COUNT(*) as total FROM genres
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
    
    getAllGenres: (start, end, data) => {
        const sql = `SELECT * FROM genres
                     WHERE name LIKE '%${data.search || ''}%' 
                     ORDER BY name ${parseInt(data.sort) ? 'DESC' : 'ASC'} 
                     LIMIT ${end} OFFSET ${start}` 
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