const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '7415963',
  database: 'cep_lookup'
});

module.exports = connection;
