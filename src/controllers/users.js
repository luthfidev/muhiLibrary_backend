const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const fs = require('fs')
const userModel = require('../models/users')
const paging = require('../utils/pagingnation')




module.exports = {

    getAllUsers: async (request, response) => {
        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }
        const sliceStart = paging.getPage(page) * paging.getPerPage(limit) - paging.getPerPage(limit)
        const sliceEnd = (paging.getPage(page) * paging.getPerPage(limit))
        const totalData = await userModel.getUsersCount(sliceStart, sliceEnd, condition)
        const totalPage = Math.ceil(totalData / paging.getPerPage(limit))
        
        const prevLink = paging.getPrevLink(paging.getPage(page), request.query)
        const nextLink = paging.getNextLink(paging.getPage(page), totalPage, request.query)

        const userData = await userModel.getAllUsers(sliceStart, sliceEnd, condition)
        

        const data = {
            success: true,
            message: 'List all user data',
            data: userData,
            pageInfo: {
                page: paging.getPage(page),
                totalPage,
                perPage: paging.getPerPage(limit),
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
        try {
            const avatar = request.file;
            if (!avatar) {
                response.status(400).send({
                    status: false,
                    message: 'No file is selected.'
                });
            } else {
                // send response
            /*     response.send({
                    status: true,
                    message: 'File is uploaded.',
                    data: {
                        name: avatar.originalname,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                }) */
           
 
                const { name, birthdate, gender } = request.body
                const  picture  = request.file.path
                
                const Error = await validationResult(request)
            // console.log(request.user.id)
                if (!Error.isEmpty()) {
                    const data = {
                        success: false,
                        message: Error
                    }
                    response.status(422).send(data)
                    return
                }
                const userData = {
                    user_id: request.user.id,
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
            }      
        } catch (err) {
            response.status(500).send(err);
        }

    },

    deleteUser: async (request, response) => {
        const { id } = request.params
        const _id = { id: parseInt(id) }
        const checkId = await userModel.getUserDetailCondition(_id)
        console.log(checkId)
        if (checkId.length > 0) {
            fs.unlinkSync(checkId[0].picture) 
            const results = await userModel.deleteDetailUser(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `User with id ${id} is deleted`
                }
                response.status(200).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delete book'
                }
                response.status(400).send(data)
            }
        } else {
            const data = {
                success: false,
                message: 'Not data for delete'
            }
            response.status(400).send(data)
        }
    }
    

}