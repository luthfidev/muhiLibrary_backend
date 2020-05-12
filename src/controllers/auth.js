const authModel = require('../models/auth')
const bcrypt = require('bcrypt')
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
                    const token = jwt.sign({ id: isFound[0].id, email: isFound[0].email, role: isFound[0].nameRole },process.env.TOKEN_SECRET, { expiresIn: '1h', algorithm: process.env.TOKEN_ALG } )
                    const data = {
                        success: true,
                        message: 'Password Match',
                        userData: {
                            email: isFound[0].email,
                            name: isFound[0].nameUser,
                            role: isFound[0].nameRole
                        },
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
    },

}