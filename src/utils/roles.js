  // 1 Admin
  // 2 User

  const permit = (...allowed) => {
    const isAllowed = role => allowed.indexOf(role) > -1;
    return (request, response, next) => {
      if (request.user && isAllowed(request.user.role)) {
        next(); 
       } else {
        const data = {
            susccess: false,
            message: 'Not Allowed'
        }
        response.status(401).send(data)
      }
    }
}
module.exports = permit