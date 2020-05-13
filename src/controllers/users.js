const userModel = require('../models/users')
const { validationResult } = require('express-validator')
const qs = require('querystring')
const bcrypt = require('bcrypt')
const saltRounds = 10


const getPage = (_page) => {
    const page = parseInt(_page)
    if (page && page > 0) {
        return page
    } else {
        return 1
    }
}
const getPerPage = (_perPage) => {
    const perPage = parseInt(_perPage)
    if (perPage && perPage > 0) {
        return perPage
    } else {
        return 5
    }
}
const getNextLink = (page, totalPage, currentQuery) => {
    if (page < totalPage) {
        const generatePage = {
            page: page + 1
        }
        return qs.stringify({ ...currentQuery, ...generatePage })
    } else {
        return null
    }
}
const getPrevLink = (page, currentQuery) => {
    if (page > 1) {
        const generatePage = {
            page: page -1
        }
        return qs.stringify({ ...currentQuery, ...generatePage })
    } else {
        return null
    }
}

module.exports = {

    getAllUsers: async (request, response) => {
        const { page, limit } = request.query
        const totalData = await userModel.getUsersCount()
        const sliceStart = getPage(page) * getPerPage(limit) - getPerPage(limit)
        const sliceEnd = (getPage(page) * getPerPage(limit))
        const totalPage = Math.ceil(totalData / getPerPage(limit))
        const nextLink = getNextLink(getPage(page), totalPage, request.query)
        const prevLink = getPrevLink(getPage(page), request.query)

        const userData = await userModel.getAllUsers(sliceStart, sliceEnd)

        const data = {
            success: true,
            message: 'List all user data',
            data: userData,
            pageInfo: {
                page: getPage(page),
                totalPage,
                perPage: getPerPage(limit),
                totalData,
                nextLink: nextLink && `http://localhost:5000/users?${nextLink}`,
                prevLink: prevLink && `http://localhost:5000/users?${prevLink}`
            }
        }
        response.status(200).send(data)
    },

    getDetailUser: async (request, response) => {
        const { id } = request.params
        const isFoundId = await userModel.getUserCondition({ id }) 
        if (isFoundId.length > 0) {
            const userData = await userModel.getDetailUser(id)
            if (userData) {
                const data = {
                    success: true,
                    message: `Detail user`,
                    data: userData,
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed load detail user'
                }
                response.status(401).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'Biodata not found'
            }
            response.status(400).send(data)
        }
    },

    searchUsers: async (request, response) => {
        const { name } = request.params
        const bookData = await bookModel.getAllBooks()
        var results = await bookData.filter(result => result.title === title)
        if (results.length > 0) {
            const data = {
                success: true,
                message: 'List search Book',
                data: results,
                pageInfo: {
                    page: 1,
                    totalPage: 5,
                    perPage: 1,
                    totalData: 10,
                    nextLink: 'Next',
                    prevLink: 'Prev'
                }
            }
            response.status(200).send(data)
        } else {
            const data = {
                success: false,
                message: 'Book title not found'
            }
            response.status(400).send(data)
        }

    },

    createUser: async (request, response) => {
       const { email, role_id} = request.body
       const password = await bcrypt.hash(request.body.password, saltRounds)
        if (email && password && role_id && email !== '' && password !== '' && role_id !=='') {
            const isExist = await userModel.getUserCondition({ email })
            if (isExist.length < 1) {
                const userData = {
                    email,
                    password,
                    role_id
                }
                const results = await userModel.createUser(userData)
                if (results) {
                    const data = {
                        success: true,
                        message: 'User has been created success',
                        data: userData
                    }
                    response.status(201).send(data)
                } else {
                    const data = {
                        success: false,
                        message: 'Failed created user',
                        data: userData
                    }
                    response.status(400).send(data)
                }
            } else {
                const data = {
                    success: false,
                    message: 'Email is Exist'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'All form must be filed'
            }
            response.status(400).send(data)
        }
    },

    createUserDetail: async (request, response) => {
        const { user_id, name, birthdate, gender } = request.body
        const  picture  = request.file.path 
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error
            }
            response.status(422).send(data)
            return
        }
        const userData = {
            user_id,
            name,
            picture,
            birthdate,
            gender
        }
        const results = await userModel.createUserDetail(userData)
        if (results) {
            const data = {
                success: true,
                message: `Biodata ${name} was created`
            }
            response.status(201).send(data)
        } else {
            const data = {
                success: false,
                message: 'Failed create biodata'
            }
            response.status(400).send(data)
        }

    },
    

}