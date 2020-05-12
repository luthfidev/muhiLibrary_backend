const genreModel = require('../models/genres')

module.exports = {

    getAllGenres: async (request, response) => {
        const genreData = await genreModel.getAllGenres()

        const data = {
            success: true,
            message: 'List all genres',
            data: genreData,
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
    },

    createGenre: async (request, response) => {
        const { name } = request.body
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
               response.status(401).send(data)
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