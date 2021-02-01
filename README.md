# Simple Exercise accessing Cassandra DB from NodeJS

## References

* Docker Image: [Link](https://hub.docker.com/_/cassandra/);

* Sample NodeJS: [Link](https://www.instaclustr.com/support/documentation/cassandra/using-cassandra/connect-to-cassandra-with-node-js/)

### OBS:

Cassandra default docker image doesn't come with Authentication enabled. To setup authentication refer to [link](https://hopding.com/cassandra-authentication-in-docker-container);

Dockerfile for enabling authentication provided

Default username  ``` cassandra ```
Default password ``` cassandra```

To connect directly to cqlsh

``` docker exec -it <<container_name>> bash``` 
``` cqlsh -u <<username>> -p <<password>>```

When running locally cassandra-driver needs to receive 

``` localDataCenter:'datacenter1' ```

based on the datacenter name of your docker container instance.

### Template Database 
``` 
CREATE KEYSPACE grocery WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1};

CREATE TABLE IF NOT EXISTS grocery.fruit_stock (item_id TEXT, name TEXT, price_p_item DECIMAL, PRIMARY KEY (item_id));

INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('a0','apples',0.50);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('b1','bananas',0.40);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('c3','oranges',0.35);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('d4','pineapples',2.5);
```
