const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const { APP_URL, TOKEN_SECRET, TOKEN_ALGORITMA } = process.env
const userModel = require('../models/users')
const pagination = require('../utils/pagination')

module.exports = {

  getAllUsers: async (request, response) => {
    const { page, limit, search, sort } = request.query
    const condition = {
      search,
      sort
    }

    const sliceStart = pagination.getPage(page) * pagination.getPerPage(limit) - pagination.getPerPage(limit)
    const sliceEnd = (pagination.getPage(limit) * pagination.getPerPage(limit))
    const totalData = await userModel.getUsersCount(condition)
    const totalPage = Math.ceil(totalData / pagination.getPerPage(limit))
    const prevLink = pagination.getPrevLink(pagination.getPage(page), request.query)
    const nextLink = pagination.getNextLink(pagination.getPage(page), totalPage, request.query)

    const userData = await userModel.getAllUsers(sliceStart, sliceEnd, condition)
    const data = {
      success: true,
      message: 'List all user data',
      data: userData.map(data => ({
        id: data.id,
        email: data.email,
        name: data.name,
        nameRole: data.role,
        gender: data.gender,
        created_at: data.created_at,
        updated_at: data.updated_at
      })),
      pageInfo: {
        page: pagination.getPage(page),
        totalPage,
        perPage: pagination.getPerPage(limit),
        totalData,
        nextLink: nextLink && `${APP_URL}users?${nextLink}`,
        prevLink: prevLink && `${APP_URL}users?${prevLink}`
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
          message: 'Detail user',
          data: userData
        }
        response.status(200).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed load detail user'
        }
        response.status(400).send(data)
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
    const { email, roleid } = request.body

    const password = await bcrypt.hash(request.body.password, saltRounds)

    const isExist = await userModel.getUserCondition({ email })
    if (isExist.length < 1) {
      const userData = {
        email,
        password,
        role_id: roleid
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
  },

  updateUserDetail: async (request, response) => {
    if (!request.file) {
      const data = {
        success: false,
        message: 'Please upload a file'
      }
      response.status(400).send(data)
    } else {
      const { name, birthdate, gender } = request.body
      const picture = request.file.path
      console.log(request.payload)
      const id = request.payload.id
      const userData = {
        user_id: id,
        name,
        picture,
        birthdate,
        gender
      }

      const results = await userModel.updateUserDetail(userData)
      if (results) {
        const id = request.payload.id
        const isFoundId = await userModel.getUserDetailCondition(id)
        const payload = {
          id: isFoundId[0].userid,
          email: isFoundId[0].email,
          role: isFoundId[0].nameRole,
          nameUser: isFoundId[0].nameUser
        }
        const token = jwt.sign(payload, TOKEN_SECRET,
          {
            expiresIn: '24h',
            algorithm: TOKEN_ALGORITMA
          })
        const data = {
          success: true,
          message: `Biodata ${name} was updated`,
          userData: {
            id: isFoundId[0].userid,
            email: isFoundId[0].email,
            name: isFoundId[0].nameUser,
            role: isFoundId[0].nameRole
          },
          token: token
        }
        response.status(200).header('Authorization', token).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed create biodata'
        }
        response.status(400).send(data)
      }
    }
  },

  deleteUser: async (request, response) => {
    const { id } = request.params
    const _id = { id: parseInt(id) }

    const checkId = await userModel.getUserDetailCondition(_id)
    console.log(checkId)
    if (checkId.length > 0) {
      //   fs.unlinkSync(checkId[0].picture)

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
