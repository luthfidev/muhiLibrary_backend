const { validationResult } = require('express-validator')
const authorModel = require('../models/authors')
const paging = require('../utils/pagingnation')

module.exports = {

    getAllAuthors: async (request, response) => {
        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }
        const sliceStart = paging.getPage(page) * paging.getPerPage(limit) - paging.getPerPage(limit)
        const sliceEnd = (paging.getPage(page) * paging.getPerPage(limit))
        const totalData = await authorModel.getAuthorsCount(condition)
        const totalPage = Math.ceil(totalData / paging.getPerPage(limit))
        
        const prevLink = paging.getPrevLink(paging.getPage(page), request.query)
        const nextLink = paging.getNextLink(paging.getPage(page), totalPage, request.query)
       
        const authorData = await authorModel.getAllAuthors(sliceStart, sliceEnd, condition)

        const data = {
            success: true,
            message: 'List authors',
            data: authorData,
            pageInfo: {
                page: paging.getPage(page),
                totalPage,
                perPage: paging.getPerPage(limit),
                totalData,
                prevLink: prevLink && `http://localhost:5000/authors?${nextLink}`,
                nextLink: nextLink && `http://localhost:5000/authors?${nextLink}`

            }
        }
        response.status(200).send(data)
    },

    createAuthor: async (request, response) => {
        const { name, description } = request.body
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error
            }
            response.status(422).send(data)
            return
        }
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
            response.status(401).send(data)
        }
    },
    
    updateAuthor: async (request, response) => {
        const { id } = request.params
        const { name, description } = request.body
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error
            }
            response.status(422).send(data)
            return
        }
        const checkId = await authorModel.getAuthorByCondition({ id: parseInt(id) })
        if (checkId.length > 0) {
            const authorData = [
                {name, description},
                {id: parseInt(id)}
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
