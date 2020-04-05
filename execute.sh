sequelize db:create --env production
sequelize db:migrate --env production
sequelize-cli db:seed:all --env production
node index