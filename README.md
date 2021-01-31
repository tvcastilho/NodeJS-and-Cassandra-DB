# Simple Exercise accessing Cassandra DB from NodeJS

## References

* Docker Image: [Link](https://hub.docker.com/_/cassandra/);

* Sample NodeJS: [Link](https://www.instaclustr.com/support/documentation/cassandra/using-cassandra/connect-to-cassandra-with-node-js/)

### OBS:

Cassandra default docker image doesn't come with Authentication enabled. To setup authentication refer to [link](https://hopding.com/cassandra-authentication-in-docker-container);

When running locally cassandra-driver needs to receive 

``` localDataCenter:'datacenter1' ```

based on the datacenter name of your docker container instance.
