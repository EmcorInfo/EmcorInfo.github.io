import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Login({ app }) {
  const Navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        setMensagem('');
        setTipoMensagem('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realize a validação do usuário e senha no servidor
    // Você pode usar uma chamada de API para enviar os dados para o servidor e validar as credenciais

    // Exemplo de chamada de API com axios
    axios
      .post('https://hospitalemcor.com.br/api/index.php?table=login', { username, password, app: app   })// Use a prop app aqui
      .then((response) => {
        // Se o login for bem-sucedido, você pode redirecionar para a área de administração ou realizar outras ações necessárias
        console.log('Login bem-sucedido');
        setMensagem(response.data.message);
        setTipoMensagem('success');

        // Armazene o token de autenticação no cliente (por exemplo, usando cookies ou armazenamento local)
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Redirecione para a página de administração
        Navigate("/adm/carrossel");
        window.location.reload();
      })
      .catch((error) => {
        // Se o login falhar, você pode exibir uma mensagem de erro ou realizar outras ações necessárias
        console.error('Erro no login', error);
        if (error.response) {
          // Erro de resposta HTTP com status diferente de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          setMensagem('Houve um erro ao entrar. (Erro de resposta HTTP)');
        } else if (error.request) {
          // Erro de solicitação sem resposta
          console.error(error.request);
          setMensagem('Houve um erro ao entrar. (Erro de solicitação)');
        } else {
          // Erro de configuração da requisição
          console.error('Erro', error.message);
          setMensagem('Houve um erro ao entrar. (Erro de configuração)');
        }
        setTipoMensagem('danger');
      });
  };

  return (
    <Container className="contlogin border rounded border-dark">
      {mensagem && <Alert variant={tipoMensagem}>{mensagem}</Alert>}
      <form className="d-flex flex-column align-items-center m-3" onSubmit={handleSubmit}>
        <h3 className="text-center mb-2">Painel de<br />Administração</h3>
        <input
          className="mb-2"
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="mb-2"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
