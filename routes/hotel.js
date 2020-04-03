const handlers = require('../handlers/hotel')



module.exports = [
  {
    method: 'GET',
    path: '/v1/hotels/',
    handler: handlers.getHotels
  }
]