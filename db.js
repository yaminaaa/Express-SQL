const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'oblog2',
  password: 'oblog2',
  database: 'oblog2'
});

client.connect();

module.exports = client;