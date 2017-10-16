# World's Collide

## Build

### Booting postgres and worlds_collide backend
```
PG_USER="user" PG_PASS="pass" PG_HOST="<IP_FOR_POSTGRES>" docker-compose up
```

### Connecting to postgres
```
docker exec -it <postgres_container_id> psql -U user -W worlds_collide
```

## cURL examples

### Add new trip
```
curl -d '{"src":"value1", "dest":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:6543/add
```
Should result in
```
{"result": 0, "trip": {"src": "value1", "dest": "value2", "uid": 262}}
```

### List trips
```
curl 'http://localhost:6543/'
```

## TODO
- Use GPX Express API for flight costs: https://developers.google.com/qpx-express/
