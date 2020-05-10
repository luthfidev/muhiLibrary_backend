const jwt = require('jsonwebtoken')

const verifyToken = (request, response, next) => {
    const token = request.header('auth-token')
    const data = {
        success: false,
        message: 'Access Denied'
    }
    if (!token) return response.status(401).send(data)
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        request.user = verified
        next()
    } catch (error) {
        const data = {
            success: false,
            message: 'Invalid Token'
        }
        response.status(400).send(data)
    }
}

module.exports = verifyToken