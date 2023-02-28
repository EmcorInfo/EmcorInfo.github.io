const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_nome_de_usuário_mysql',
  password: 'sua_senha_mysql',
  database: 'nome_do_seu_banco_de_dados_mysql',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
