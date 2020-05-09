const userModel = require('../models/users')
const qs = require('querystring')

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

    createUser: async (request, response) => {
        const { name, email, password } = request.body
        if (name && email && password && name !== '' && email !== '' && password !== '') {
            const isExist = await userModel.getUserCondition({ email })
            if (isExist.length < 1) {
                const userData = {
                    name,
                    email,
                    password
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
    }

    

}