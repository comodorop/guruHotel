const {Hotel, Restaurant, Room} = require('../models')

async function getHotels(request, h){
  try {
    let restaurantsPromises = []
    let roomsPromises=[]
    const data = await Hotel.findAll()
    for (let index = 0; index < data.length; index++) {
      let promise = getRestaurant(data[index])
      restaurantsPromises.push(promise)
    }
    try {
      let lstInfo = await Promise.all(restaurantsPromises)
      for (let i = 0; i < lstInfo.length; i++) {
        let promiseRoom = getRooms(lstInfo[i])
        roomsPromises.push(promiseRoom)
      }
      let lstInfoAll = await Promise.all(roomsPromises)
      return h.response({data: lstInfoAll, status: 200, length: lstInfo.length}).code(200)  
    } catch (error) {
      return h.response({data: "There is a problem in the server"}).code(500)
    }
  } catch (error) {
    return h.response({data: "There is a problem in the server"}).code(500)
  }
}
function getRestaurant(obj){
  return new Promise(async (resolve , reject)=>{
    try {
      let objRestaurant = await Restaurant.findAll({where: {
        id: obj.id_restaurant
      }})
      obj.dataValues.restaurant = objRestaurant
      resolve(obj)
    } catch (error) {
      reject(error)
    }
  })
}
function getRooms(obj){
  return new Promise(async (resolve, reject)=>{
      try {
        let objRooms = await  Room.findAll({where: {
          idHotel: obj.dataValues.id
        }})
        obj.dataValues.rooms = objRooms
        resolve(obj)
      } catch (error) {
        reject(error)
      }
  })
}

module.exports = {
  getHotels
}