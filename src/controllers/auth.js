const authModel = require('../models/auth')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')


module.exports = {

    loginUser: async (request, response) => {
        const { email, password } = request.body
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
                    const token = jwt.sign({ id: isFound.id, role: isFound.role_id },process.env.TOKEN_SECRET, { expiresIn: '1h', algorithm: process.env.TOKEN_ALG } )
                    // response.header('auth-token', token).send(token)
                    const data = {
                        success: true,
                        message: 'Password Match',
                        token: token
                    }
                    response.status(201).header('auth-token', token).send(data)
                    //console.log(token)
                }
            })        
        } else {
            const data = {
                success: false,
                message: 'Not Found Email'
            }
            response.status(400).send(data)
        } 
    }
}