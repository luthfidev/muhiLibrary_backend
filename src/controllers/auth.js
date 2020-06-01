const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { TOKEN_SECRET, TOKEN_ALGORITMA } = process.env
const authModel = require('../models/auth')
const logsModel = require('../models/logs')

module.exports = {

  signIn: async (request, response) => {
    const { email, password } = request.body
    const Error = await validationResult(request)
    if (!Error.isEmpty()) {
      const data = {
        success: false,
        message: Error.array()
      }
      response.status(400).send(data)
      return
    }

    const isLoginLogs = await logsModel.getCheckLogin({ user_email: email })

    if (isLoginLogs.length > 0) {
      if (isLoginLogs[0].user_email === email) {
        const data = {
          success: false,
          message: 'user has logged in'
        }
        response.status(400).send(data)
        return false
      }
    }

    const isFound = await authModel.getAuthCondition({ email })
    if (isFound.length > 0) {
      const isFoundPassword = isFound[0].password
      await bcrypt.compare(password, isFoundPassword, function (error, isMatch) {
        if (error) {
          const data = {
            success: false,
            message: 'Failed match password'
          }
          response.status(400).send(data)
        } else if (!isMatch) {
          const data = {
            success: false,
            message: 'Password not match'
          }
          response.status(400).send(data)
        } else {
          const payload = {
            id: isFound[0].id,
            email: isFound[0].email,
            role: isFound[0].nameRole,
            nameUser: isFound[0].nameUser
          }
          const token = jwt.sign(payload, TOKEN_SECRET,
            {
              expiresIn: '1h',
              algorithm: TOKEN_ALGORITMA
            })

          const isLoginLogsData = {
            user_email: email,
            type: 0,
            description: 'login',
            status: 0
          }

          logsModel.createLogsLogin(isLoginLogsData)

          const data = {
            success: true,
            message: 'Password Match',
            userData: {
              email: isFound[0].email,
              role: isFound[0].nameRole
            },
            token: token
          }
          response.status(200).header('Authorization', token).send(data)
        }
      })
    } else {
      const data = {
        success: false,
        message: 'Not Found Email'
      }
      response.status(400).send(data)
    }
  },

  signUp: async (request, response) => {
    const { email, password } = request.body
    const Error = await validationResult(request)
    if (!Error.isEmpty()) {
      const data = {
        success: false,
        message: Error.array()
      }
      response.status(400).send(data)
      return
    }
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const isExist = await authModel.getAuthCondition({ email })
    if (isExist.length < 1) {
      const registerData = {
        email,
        password: passwordHash
      }
      const results = await authModel.signUp(registerData)
      if (results) {
        const data = {
          success: true,
          message: 'Register success',
          data: registerData.email
        }
        response.status(201).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed register'
        }
        response.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: 'Email is exist, please use another email'
      }
      response.status(400).send(data)
    }
  },

  logOut: async (request, response) => {
    const payload = request.payload
    const condition = {
      email: payload.email,
      type: 0
    }
    const results = await logsModel.deleteLogsLogin(condition)

    if (results) {
      const data = {
        success: true,
        message: 'success logout'
      }
      response.status(200).send(data)
    } else {
      const data = {
        success: false,
        message: 'Failed to logout'
      }
      response.status(400).send(data)
    }
  }

}
