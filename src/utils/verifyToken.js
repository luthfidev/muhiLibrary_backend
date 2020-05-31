const jwt = require('jsonwebtoken')

const verifyToken = async (request, response, next) => {
    const bearerHeader = request.header('Authorization')
    if (!bearerHeader || bearerHeader.indexOf(' ') === -1) {
        const data = {
            success: false,
            message: 'Missing Authorization Header'
        }
        return response.status(401).send(data);
    }
    const token = bearerHeader.split(' ')[1]
    
    const data = {
        success: false,
        message: 'Access Denied'
    }
    if (!token) return response.status(401).send(data)
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        const payload = verified
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