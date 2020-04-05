# Run project

```
docker-compose up
```
## Test the enpoint
You can use curl to impact the endpoint

```
curl -XGET -H "Content-type: application/json" 'http://localhost:4001/v1/hotels/'
```
response 200

```
{
  "status": 200,
  "lenght": 1,
  "data": [
      {
        "id": "c1b12742-f8f2-4555-a08e-598959b4d13a",
        "name": "TRS",
        "location": "Rivera maya",
        "start": 5,
        "id_restaurant": "bf09e2f9-ff22-45f2-b5f6-ef73f7d435eb",
        "restaurant": [
          {
            "id": "bf09e2f9-ff22-45f2-b5f6-ef73f7d435eb",
            "name": "Mugaritz",
            "description": "Food Spanish"
          }
        ],
        "rooms": [
          {
            "id": "8e9631bd-140f-4a99-a70e-b7f6420abfd5",
            "idHotel": "c1b12742-f8f2-4555-a08e-598959b4d13a",
            "name": "Suite junior",
            "description": "Para 2 personas",
            "capacity": 5,
            "number": 64
          }
        ]
      }
  ]
}
```

## Technologies implemented

- Node js v10.00
- Hapi server
- Orm Sequelize
- Db postgres

## Sequelize
Implements migrations and seed to generate the table and create some fakes data

To Create a migrations:
```
npx sequelize-cli migration:generate --name nameMigrations
```

To run migration to create DB
```
sequelize db:create --env production
```

To run migrations execute next command
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