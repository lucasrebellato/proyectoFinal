const { Pool } = require('pg');

const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
}

const pool = new Pool(config);

module.exports = {
    query: (queryString, params) => pool.query(queryString, params)
}