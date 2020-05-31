const cekBiodata = (request, response, next) => {

    if (payload.nameUser === null) {
        const data = {
            success: false,
            message: 'Please update your profile'
        }
        response.status(400).send(data)
        return false
    } else {
        next();
    }
}

module.exports = cekBiodata