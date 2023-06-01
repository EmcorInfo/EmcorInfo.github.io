const express = require('express');
const router = express.Router();
// const mysql = require('mysql2');
const pool = require('../database');

// Configuração do banco de dados
// const pool = mysql.createPool({
//   host: '162.241.203.10',
//   user: 'hospi226_carrosseluser',
//   password: 'emcor@@2021',
//   database: 'hospi226_carrossel',
//   connectionLimit: 10,
//   connectTimeout: 30000,
// });

// Rota para inserir imagem no carrossel
router.post('/', (req, res) => {
  const { img, alt, caption } = req.body;

  const query = `INSERT INTO carrossel (img, alt, caption_title, caption_text, caption_add) VALUES (?, ?, ?, ?, ?)`;
  const values = [img, alt, caption.title, caption.text, caption.add];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Houve um erro ao adicionar a imagem.' });
      return;
    }

    connection.query(query, values, (err, results) => {
      connection.release(); // Liberar a conexão do pool

      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Houve um erro ao adicionar a imagem.' });
      } else {
        res.status(200).json({ message: 'Imagem adicionada com sucesso!' });
      }
    });
  });
});

module.exports = router;
