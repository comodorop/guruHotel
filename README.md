To Create a migrations:
```
npx sequelize-cli migration:generate --name nameMigrations
```

to run migrations execute nexts command
```
 sequelize db:migrate --env production
```

If we want to insert data for default, we need to create a seed, to create a seed in sequelize we must to execute next command: 
```
npx sequelize-cli seed:generate --name demo-user
```
to run the seeds run next command:
```
 npx sequelize-cli db:seed:all
```