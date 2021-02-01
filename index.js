var assert = require('assert');
//”cassandra-driver” is in the node_modules folder. Redirect if necessary.
var cassandra = require('cassandra-driver'); 
//Replace Username and Password with your cluster settings
var authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
//Replace PublicIP with the IP addresses of your clusters
var contactPoints = ['localhost'];
var client = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter:'datacenter1', keyspace:'grocery'});

//Ensure all queries are executed before exit
function execute(query, params, callback) {
  return new Promise((resolve, reject) => {
    client.execute(query, params, (err, result) => {
      if(err) {
          console.log(err);
        reject()
      } else {
        callback(err, result);
        resolve()
      }
    });
  });
}

//Execute the queries 
var query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
var q1 = execute(query, ['oranges'], (err, result) => { assert.ifError(err); console.log('The cost per orange is $' + result.rows[0].price_p_item)});
var q2 = execute(query, ['pineapples'], (err,result) => { assert.ifError(err); console.log('The cost per pineapple is $' + result.rows[0].price_p_item)});
var q3 = execute(query, ['apples'], (err,result) => { assert.ifError(err); console.log('The cost per apple is $' + result.rows[0].price_p_item)});
Promise.all([q1,q2,q3]).then(() => {
  console.log('exit');
  process.exit();
}).catch((err) => console.log(err));