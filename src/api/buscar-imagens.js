const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuração do banco de dados
const pool = mysql.createPool({
  host: '162.241.203.10',
  user: 'hospi226_carrosseluser',
  password: 'emcor@@2021',
  database: 'hospi226_carrossel',
  connectionLimit: 10,
  connectTimeout: 30000,
});

// Rota para buscar os dados do carrossel
router.get('/', (req, res) => {
  const query = `SELECT * FROM carrossel`;

  pool.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Houve um erro ao buscar os dados do carrossel.' });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
