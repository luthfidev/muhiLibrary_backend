const { APP_URL } = process.env
const authorModel = require('../models/authors')
const pagination = require('../utils/pagination')

module.exports = {

  getAllAuthors: async (request, response) => {
    const { page, limit, search, sort } = request.query
    const condition = {
      search,
      sort
    }

    const sliceStart = (pagination.getPage(page) * pagination.getPerPage(limit)) - pagination.getPerPage(limit)
    const sliceEnd = (pagination.getPage(page) * pagination.getPerPage(limit)) - sliceStart
    const totalData = await authorModel.getAuthorsCount(condition)
    const totalPage = Math.ceil(totalData / pagination.getPerPage(limit))
    const prevLink = pagination.getPrevLink(pagination.getPage(page), request.query)
    const nextLink = pagination.getNextLink(pagination.getPage(page), totalPage, request.query)

    const authorData = await authorModel.getAllAuthors(sliceStart, sliceEnd, condition)
    const data = {
      success: true,
      message: 'List authors',
      data: authorData,
      pageInfo: {
        page: pagination.getPage(page),
        totalPage,
        perPage: pagination.getPerPage(limit),
        totalData,
        prevLink: prevLink && `${APP_URL}authors?${nextLink}`,
        nextLink: nextLink && `${APP_URL}authors?${nextLink}`
      }
    }
    response.status(200).send(data)
  },

  createAuthor: async (request, response) => {
    const { name, description } = request.body

    const authorData = {
      name,
      description
    }
    const results = await authorModel.createAuthorBook(authorData)
    if (results) {
      const data = {
        success: true,
        message: 'Create author book has ben success',
        data: authorData
      }
      response.status(201).send(data)
    } else {
      const data = {
        success: false,
        message: 'Failed create author book'
      }
      response.status(400).send(data)
    }
  },

  updateAuthor: async (request, response) => {
    const { id } = request.params
    const { name, description } = request.body

    const checkId = await authorModel.getAuthorByCondition({ id: parseInt(id) })
    if (checkId.length > 0) {
      const authorData = [
        { name, description },
        { id: parseInt(id) }
      ]
      const results = await authorModel.updateAuthor(authorData)
      if (results) {
        const data = {
          success: true,
          message: 'Author has been update',
          data: authorData[0]
        }
        response.status(201).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed update author'
        }
        response.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: `Author with id ${id} not found`
      }
      response.status(400).send(data)
    }
  },

  deleteAuthor: async (request, response) => {
    const { id } = request.params
    const _id = { id: parseInt(id) }
    const checkId = await authorModel.getAuthorByCondition(_id)
    if (checkId.length > 0) {
      const results = await authorModel.deleteAuthor(_id)
      if (results) {
        const data = {
          success: true,
          message: `Author with id ${id} is deleted`
        }
        response.status(200).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed delete author'
        }
        response.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: 'No author for delete'
      }
      response.status(400).send(data)
    }
  }

}
