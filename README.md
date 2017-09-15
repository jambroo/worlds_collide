# Worlds Collide
# Cassandra Setup

# Run server
sudo docker run -p 9042:9042 -p 7000:7000 -p 7001:7001 -p 7199:7199 -p 9160:9160  --name cassandra1 -d cassandra:latest

# Run client
sudo docker run -it --link cassandra1:cassandra --rm cassandra sh -c 'exec cqlsh "$CASSANDRA_PORT_9042_TCP_ADDR"'

## Setup "trips" keyspace and table
CREATE KEYSPACE trips WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy',   'datacenter1' : 3 } AND DURABLE_WRITES = false;
USE trips
CREATE TABLE trips (id UUID PRIMARY KEY, from_place text, to_place text);
