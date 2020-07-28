const db = require('../utils/db')

module.exports = {
  getUsersCount: (data) => {
    const sql = `SELECT COUNT(users.id) as total FROM users 
                     JOIN roles on roles.id = users.role_id 
                     JOIN user_details on user_details.user_id = users.id
                     WHERE user_details.name LIKE '%${data.search || ''}%' 
                     ORDER BY user_details.name ${parseInt(data.sort) ? 'DESC' : 'ASC'}`

    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error).total)
        }
        resolve(results[0].total)
      })
    })
  },

  getUserCondition: (data) => {
    console.log(data)
    const sql = 'SELECT * FROM users WHERE ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getUserDetailCondition: (data) => {
    const sql = `SELECT users.id as userid, 
                             users.email, 
                             users.password, 
                             user_details.picture as picture, 
                             user_details.name as nameUser, 
                             user_details.birthdate, 
                             user_details.gender, 
                             roles.name as nameRole FROM users 
                     JOIN roles on roles.id = users.role_id 
                     JOIN user_details on user_details.user_id = users.id
                     WHERE users.id = ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data.id, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getAllUsers: (start, end, data) => {
    const sql = `SELECT users.id, 
                            users.email, 
                            user_details.name,    
                            user_details.gender,
                            roles.name as role,
                            users.created_at,
                            users.updated_at FROM users 
                     JOIN roles on roles.id = users.role_id 
                     JOIN user_details on user_details.user_id = users.id
                     WHERE user_details.name LIKE '%${data.search || ''}%' 
                     ORDER BY user_details.name ${parseInt(data.sort) ? 'DESC' : 'ASC'} LIMIT ${end} OFFSET ${start}`
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getDetailUser: (id) => {
    const sql = `SELECT roles.name, 
                            users.email, 
                            users.password, 
                            user_details.picture, 
                            user_details.name, 
                            user_details.birthdate, 
                            user_details.gender, 
                            roles.name as role 
                     FROM users JOIN roles on roles.id = users.role_id 
                     JOIN user_details on user_details.user_id = users.id
                     WHERE users.id = ${id}`
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  createUser: (data) => {
    const sql = 'INSERT INTO users SET ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  },

  updateUserDetail: (data) => {
    console.log(data)
    const sql = 'UPDATE user_details SET name = ?, gender = ?, birthdate = ? WHERE user_id = ? '
    return new Promise((resolve, reject) => {
      db.query(sql, [data.name, data.gender, data.birthdate, data.user_id], (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  },

  uploadImageUser: (data) => {
    const sql = 'UPDATE user_details SET picture = ? WHERE user_id = ? '
    return new Promise((resolve, reject) => {
      db.query(sql, [data.picture, data.userid], (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  },

  deleteDetailUser: (data) => {
    console.log(data)
    const sql = 'DELETE FROM users WHERE ?'
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
