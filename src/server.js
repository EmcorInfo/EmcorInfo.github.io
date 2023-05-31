const express = require('express');
const app = express();
const cors = require('cors'); // Importe o pacote cors
const inserirImagemRouter = require('./api/inserir-imagem');
const buscarImagensRouter = require('./api/buscar-imagens');

app.use(express.json());

// Adicione o middleware cors
app.use(cors());

app.use('/api/inserir-imagem', inserirImagemRouter);
app.use('/api/buscar-imagens', buscarImagensRouter);
// Inicie o servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
