const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { TOKEN_SECRET, TOKEN_ALGORITMA } = process.env
const authModel = require('../models/auth')



module.exports = {

    signIn: async (request, response) => {
        const { email, password } = request.body
        
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error.array().map(item => ({[item.param]: item.msg}))
            }
            response.status(400).send(data)
            return
        }

        const isFound = await authModel.getAuthCondition({ email })
        if (isFound.length > 0) {
            const isFoundPassword = isFound[0].password
            await bcrypt.compare(password, isFoundPassword, function(error, isMatch) {
                if (error) {
                    const data = {
                        success: false,
                        message: 'Failed match password',
                    }
                    response.status(400).send(data)
                } else if (!isMatch) {
                    const data = {
                        success: false,
                        message: 'Password not match'
                    }
                    response.status(400).send(data)
                } else {
                    const token = jwt.sign({ id: isFound[0].id, 
                                             email: isFound[0].email, 
                                             role: isFound[0].nameRole }, 
                                             TOKEN_SECRET, 
                                                { expiresIn: '24h', 
                                                  algorithm: TOKEN_ALGORITMA } )
                    const data = {
                        success: true,
                        message: 'Password Match',
                        userData: {
                            email: isFound[0].email,
                            name: isFound[0].nameUser,
                            role: isFound[0].nameRole
                        },
                        token: "Bearer " + token
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
                message: Error.array().map(item => ({[item.param]: item.msg}))
            }
            response.status(400).send(data)
            return
        }
        const passwordHash = await bcrypt.hash(password , saltRounds)
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
    }

}