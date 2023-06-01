const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '162.241.203.10',
    user: 'hospi226_carrosseluser',
    password: 'emcor@@2021',
    database: 'hospi226_carrossel',
    connectionLimit: 10,
    connectTimeout: 30000,
  });

  module.exports = pool;