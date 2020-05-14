const genreModel = require('../models/genres')
const pagination = require('../utils/pagination')

module.exports = {

    getAllGenres: async (request, response) => {
        const { page, limit, search, sort } = request.query
        const condition = {
            search,
            sort
        }

        const sliceStart = pagination.getPage(page) * pagination.getPerPage(limit) - pagination.getPerPage(limit)
        const sliceEnd = (pagination.getPage(page) * pagination.getPerPage(limit))
        const totalData = await genreModel.getGenresCount(condition)
        const totalPage = Math.ceil(totalData / pagination.getPerPage(limit))
        const prevLink = pagination.getPrevLink(pagination.getPage(page), request.query)
        const nextLink = pagination.getNextLink(pagination.getPage(page), totalPage, request.query)

        const genreData = await genreModel.getAllGenres(sliceStart, sliceEnd, condition)
        const data = {
            success: true,
            message: 'List all genres',
            data: genreData,
            pageInfo: {
                page: pagination.getPage(page),
                totalPage,
                perPage: pagination.getPerPage(limit),
                totalData,
                prevLink: prevLink && `http://localhost:5000/authors?${nextLink}`,
                nextLink: nextLink && `http://localhost:5000/authors?${nextLink}`

            }
        }
        response.status(200).send(data)
    },

    createGenre: async (request, response) => {
        const { name } = request.body
        
        const Error = await validationResult(request)
        if (!Error.isEmpty()) {
            const data = {
                success: false,
                message: Error.array().map(i => `${i.msg}`)
            }
            response.status(400).send(data)
            return
        }
        const genreData = {
            name
        }

        const results = await genreModel.createGenre(genreData)
        if (results) {
            const data = {
                success: true,
                message: 'Create genre has ben success',
                data: genreData
            }
            response.status(201).send(data)
        } else {
            const data = {
                success: false,
                message: 'Failed create genre'
            }
            response.status(400).send(data)
        }
    },

    updateGenre: async (request, response) => {
       const { id } = request.params
       const { name } = request.body
       const checkId = await genreModel.getGenreByCondition({ id: parseInt(id) })
       if (checkId.length > 0) {
           const genreData = [
               { name },
               { id: parseInt(id) }
           ]
           const results = await genreModel.updateGenre(genreData)
           if (results) {
               const data = {
                   success: true,
                   message: 'Genre has been updated',
                   data: genreData[0]
               }
               response.status(201).send(data)
           } else {
               const data = {
                   success: false,
                   message: 'Failed updated genre'
               }
               response.status(400).send(data)
           }
       } else {
           const data = {
               success: false,
               message: `Genre with id ${id} not found`
           }
           response.status(400).send(data)
       }
    },

    deleteGenre: async (request, response) => {
        const { id } = request.params
        const _id = { id: parseInt(id) }
        const checkId = await genreModel.getGenreByCondition(_id)
        if (checkId.length > 0) {
            const results = await genreModel.deleteGenre(_id)
            if (results) {
                const data = {
                    success: true,
                    message: `Genre with id ${id} is deleted`
                }
                response.status(201).send(data)
            } else {
                const data = {
                    success: false,
                    message: 'Failed delete genre'
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