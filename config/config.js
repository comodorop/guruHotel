require('dotenv').config()
console.log(process.env.HOST_DEV)
module.exports = {
  development: {
    username: process.env.USER_DEV,
    password: process.env.PASS_DEV,
    database: process.env.DB_DEV,
    host: process.env.HOST_DEV,
    dialect: 'postgres',
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
  },
  test: {
    username: process.env.USER_DEV,
    password: process.env.PASS_DEV,
    database: process.env.DB_DEV,
    host: process.env.HOST_DEV,
    dialect: 'postgres',
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'postgres',
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
  }
};