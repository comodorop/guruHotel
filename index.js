require('dotenv').config()

const Hapi = require('hapi');
const routes ={}
routes.hotels = require('./routes/hotel')


const init = async ()=>{
  const server = Hapi.server({
    port: process.env.PORT,
    host: '0.0.0.0',
    routes: {
      cors: true
    }
  })
  server.route(routes.hotels)

  await server.start()
  console.log(`Server run in ${process.env.PORT}`)
}

init()

