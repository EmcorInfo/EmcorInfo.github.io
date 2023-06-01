const pool = require('../database');
const express = require('express');
const router = express.Router();


router.delete('/' , (req, res)=>{ 
    const { id } = req.body;

    pool.query('DELETE FROM carrossel WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar a imagem do banco de dados.' });
        } else {
            res.status(200).json({ message: 'Imagem deletada com sucesso.' });
        }
    });
});

module.exports = router;