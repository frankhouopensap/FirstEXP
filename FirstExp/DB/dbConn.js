
    // var pgp = require('pg-promise')();
    // var connString = 'postgres://postgres:admin@localhost:5432/userinfo';
    // var dbConn = pgp(connString);

    const { Pool } = require('pg');
    const dbPool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'userinfo',
        password: 'admin',
        port: 5432,
      })

    module.exports = { dbPool };