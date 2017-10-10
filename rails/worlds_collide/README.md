# World's Collide

## Build

## Booting postgres and worlds_collide backend
```
PG_USER="user" PG_PASS="pass" docker-compose up
```

## Connecting to postgres
```
docker exec -it <postgres_container_id> psql -U user -W worlds_collide
```

## Troubleshooting
To ensure you have no legacy postgres running you can use the following:
```
docker-compose rm postgres
```

## Run migrations

```
docker exec -it <rails_container_id> bin/rails db:migrate RAILS_ENV=development
```

## cURL examples

### Add new trip
```
curl 'http://localhost:3000/trips/new' -X POST -H "Content-Type: application/json" -d '{"trip":{"src": "from_place", "dest": "to_place"}}'
```
Should result in
```
{"response":0,"trip":{"id":1,"src":"from_place","dest":"to_place","created_at":"2017-10-10T14:55:22.601Z","updated_at":"2017-10-10T14:55:22.601Z"}}
```

### List trips
```
curl 'http://localhost:3000/trips'
```
