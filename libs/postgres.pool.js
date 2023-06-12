const { Pool } = require('pg');

const client = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'franlop24',
  password: 'admin123',
  database: 'my_store'
});

module.exports = client;
