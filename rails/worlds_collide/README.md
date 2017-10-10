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
