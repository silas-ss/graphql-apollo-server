const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'research',
  password: 'postgres',
  port: 5432
});

const db = {
	getPool: () => {
    return pool;
  }
};

module.exports = db